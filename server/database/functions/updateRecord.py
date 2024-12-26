'''
@author  Joseph Adogeri
@since   22-DEC-2024
@version 1.0  

'''
import sqlite3
from os.path import dirname, abspath
from ..scripts.update_scripts import *

def updateRecord(service_name):

    print("service name ========",service_name)
    dailyspan_scripts = update_dailyspan_scripts()
    lifespan_scripts = update_lifespan_scripts()
    dailspan_sql_command = dailyspan_scripts[service_name]
    lifespan_sql_command = lifespan_scripts[service_name]
    print(dailspan_sql_command)
    print(lifespan_sql_command)

    
    dir = dirname(dirname(abspath(__file__)))
    db_file = dir + "/api.db"

    # Connect to the database (or create it if it doesn't exist)
    print("connecting to database....................");
    conn = sqlite3.connect(db_file)

    # Create a cursor object
    cur = conn.cursor();
    try:
        cur.execute(lifespan_sql_command);
        conn.commit();
        cur.execute(dailspan_sql_command);
        conn.commit();
        
    except Exception as msg:
        print("Command skipped: ", msg)
    cur.close();
    conn.close();

