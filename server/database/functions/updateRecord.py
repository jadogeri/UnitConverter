'''
@author  Joseph Adogeri
@since   22-DEC-2024
@version 1.0  

'''
import sqlite3
from os.path import dirname, abspath
from ..scripts.update_scripts import update_scripts

def updateRecord(table,total,service_name):

    table = table.lower().strip();
    service_name = service_name.lower().strip();
    vals = (total,total,service_name)
    sqlcommands = update_scripts();
    command =sqlcommands[table];
    dir = dirname(dirname(abspath(__file__)))
    db_file = dir + "\\api.db"

    # Connect to the database (or create it if it doesn't exist)
    print("connecting to database....................");
    conn = sqlite3.connect(db_file)
    print("data to update",table,total,service_name)

    # Create a cursor object
    cur = conn.cursor();
    try:
        cur.execute(command,vals);
        conn.commit();
        
    except Exception as msg:
        print("Command skipped: ", msg)
    cur.close();
    conn.close();

