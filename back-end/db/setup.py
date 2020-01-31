import sqlite3


conn = sqlite3.connect('interface.db')

c = conn.cursor()

c.execute("""CREATE TABLE emotions (
    neutral integer, 
    happy integer, 
    sad integer, 
    angry integer,
    fearful integer,
    disgusted integer, 
    surprised integer, 
    timestamp text
)""")

conn.close()