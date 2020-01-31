from flask import Flask
from flask import request 
from flask_cors import CORS
import sqlite3
import json
import time

ts = time.gmtime()
print(time.strftime("%Y-%m-%d %H:%M:%S", ts))



server = Flask(__name__)

CORS(server)


# def format_time(str):


    

@server.route('/<username>', methods = ['GET', 'POST'])
def handle_request(username):
    #create connection to database...
    conn = sqlite3.connect('db/interface.db')
    c = conn.cursor()

    #define model functions....
    def get_rows():
        start_time = request.args.get('from')
        end_time = request.args.get('to')
        if start_time != None:
            c.execute('SELECT * FROM emotions WHERE timestamp < ? AND timestamp > ?', )
        c.execute('SELECT * FROM emotions')
        return c.fetchall() 
    
    def insert_rows(data):
        c.execute('INSERT INTO emotions VALUES (?, ?, ?, ?, ?, ?, ?, ?)', (
        data['neutral'], data['happy'], data['sad'], data['angry'], data['fearful'], data['disgusted'], data['surprised'], time.ctime(time.time())
        ))
        conn.commit()

    # controller and router - sends json array of object corresponding to table rows...
    if request.method == 'GET':
        return (json.dumps(get_rows()), 200)


    
    if request.method == 'POST': 
        data = request.get_json()
        insert_rows(data)
        return (json.dumps(get_rows()), 200)
    
    #close connection to db...
    conn.close()