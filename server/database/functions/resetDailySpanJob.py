'''
@author  Joseph Adogeri
@since   22-DEC-2024
@version 1.0  

'''
import sqlite3
import os
from os.path import dirname, abspath

def job():
    print("started running job.......................");

    dir = dirname(dirname(abspath(__file__)))
    db_file = dir + "\\api.db"
    scripts_path = dir + "\\scripts";

    # Connect to the database (or create it if it doesn't exist)
    print("connecting to database....................");
    conn = sqlite3.connect(db_file)

    # Create a cursor object
    cur = conn.cursor();
    file_path = scripts_path +  '\\update.sql';
    print("file path ===",file_path)
    if os.path.exists(file_path):
        print(file_path)

    # Open and read the file as a single buffer
    fd = open(file_path, 'r')
    sqlFile = fd.read()
    fd.close()

    # all SQL commands (split on ';')
    sqlCommands = sqlFile.split(';')
    command = sqlCommands[0];
    
    try:
        print(command)
        cur.execute(command)  
        conn.commit();               
        print("finished running job.......................");
    except Exception as msg:
        print("Command skipped:", msg)
    cur.close();
    conn.close();

