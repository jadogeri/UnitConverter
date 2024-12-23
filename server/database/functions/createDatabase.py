'''
@author  Joseph Adogeri
@since   22-DEC-2024
@version 1.0  

'''
import sqlite3
from os.path import dirname, abspath

def createDatabase():
    try:

        dir = dirname(dirname(abspath(__file__)))
        db_file = dir + "\\api.db"

        # Connect to the database (or create it if it doesn't exist)
        print("connecting to database....................");
        sqlite3.connect(db_file)

    except Exception as msg:
        print("Exception: ", msg)
