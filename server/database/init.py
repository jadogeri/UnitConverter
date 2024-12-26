import sqlite3
import os
from .functions.createTables import *
from .functions.insertRecords import *
from .functions.fetchRecords import *
from .functions.updateRecord import *
from .functions.createDatabase import *
from .functions.dropTables import *


createDatabase();

''' drop  tables'''
dropTables();

# Create tables

createTables();

''' insert into  table'''

insertRecords();

''' fetching data from tables'''

fetchRecords();

''' update data from tables'''

updateRecord("time");
print(fetchRecords());
