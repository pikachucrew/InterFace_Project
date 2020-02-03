from flask import Flask
from flask import request 
from flask_cors import CORS
import sqlite3
import json
import hashlib
import time

server = Flask(__name__)
CORS(server)

def format_time():
    ts = time.gmtime()
    formatted_time = time.strftime("%Y-%m-%d %H:%M:%S", ts)
    return [formatted_time[0:4] + formatted_time[5:7] + formatted_time[8:10], formatted_time[11:]]

@server.route('/<email>', methods = ['GET', 'POST'])
def handle_request(email):

    #hashes the user's email address
    user_hash = hashlib.sha256(email.encode()).hexdigest()

    #create connection to database....
    conn = sqlite3.connect('db/interface.db')
    c = conn.cursor()

    #define model functions....
    def get_rows(user_hash):
        start_time = request.args.get('from')
        end_time = request.args.get('to')
        #gets all data for a specific user
        if (start_time == None and end_time == None):
            c.execute('SELECT * FROM emotions WHERE email = ?', (user_hash,))  
        #gets all data up to specific time for specific user    
        elif (start_time == None and end_time != None): 
            c.execute('SELECT * FROM emotions WHERE time < ? AND email = ?', (end_time, user_hash))
        #get all data from specific time for specific user    
        elif (start_time != None and end_time == None):
            c.execute('SELECT * FROM emotions WHERE time > ? AND time < ? AND email = ?', (start_time, format_time()[1], user_hash))
        #gets all data from specific time to specific time for specific user    
        else:
            c.execute('SELECT * FROM emotions WHERE time > ? AND time < ? AND email = ?', (start_time, end_time, user_hash))

        return c.fetchall() 
    
    def insert_rows(data, user_hash):       
        c.execute('INSERT INTO emotions VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', (
        user_hash, data['neutral'], data['happy'], data['sad'], data['angry'], data['fearful'], data['disgusted'], data['surprised'], format_time()[0], format_time()[1]
        ))
        conn.commit()

    # controller and router - sends json array of objects from corresponding table rows...
    if request.method == 'GET':
        return (json.dumps(get_rows(user_hash)), 200)
    
    if request.method == 'POST': 
        data = request.get_json()
        insert_rows(data, user_hash)
        return (json.dumps(get_rows(user_hash)), 200)
    
    #close connection to db...
    conn.close()