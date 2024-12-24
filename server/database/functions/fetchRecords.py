'''
@author  Joseph Adogeri
@since   22-DEC-2024
@version 1.0  

'''
import sys
import sqlite3
import os
from os.path import dirname, abspath

def fetchRecords():

    records = [];
    dir = dirname(dirname(abspath(__file__)))
    func_dir = dir +"/functions"
    print("dir in fetch records ===",func_dir)

    sys.path.append(dir)
    sys.path.append(func_dir)

    db_file = dir + "/api.db"
    scripts_path = dir + "/scripts";

    # Connect to the database (or create it if it doesn't exist)
    print("connecting to database....................");
    conn = sqlite3.connect(db_file)

    # Create a cursor object
    cur = conn.cursor();
    file_path = scripts_path +  '/select.sql';
    print("file path ===",file_path)
    if os.path.exists(file_path):
        print(file_path)

    # Open and read the file as a single buffer
    fd = open(file_path, 'r')
    sqlFile = fd.read()
    fd.close()

    # all SQL commands (split on ';')
    sqlCommands = sqlFile.split(';')

    c_val = 0
    command = sqlCommands[0];
    try:
        print(command)
        cur.execute(command)  
        rows = cur.fetchall()  
        for row in rows:
            record = {"l_name" :row[0], "l_total" :row[1],"d_name" :row[2],"d_total" :row[3]}
            records.append(record);
        
    except Exception as msg:
        print("Command skipped: at fetch", msg)
    cur.close();
    conn.close();
    print(records)
    return records;


'''

CT l_name "LIFESPAN SERVICE",
       l_total "LS TOTAL",
       d_name "DAILYSPAN SERVICE",
       d_total "DS TOTAL"

'''