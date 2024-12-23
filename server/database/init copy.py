import sqlite3
import os

update_scripts = { "lifespan" :  "UPDATE LIFESPAN SET l_total = ? WHERE ? >= 0 AND l_name = ?",
                   "dailyspan" :  "UPDATE DAILYSPAN SET d_total = ? WHERE ? >= 0 AND d_name = ?"
                 }

# Connect to the database (or create it if it doesn't exist)
print("connecting to database....................");
conn = sqlite3.connect('./database/api.db')
# Create a cursor object
cur = conn.cursor()

# Enable foreign key support
cur.execute("PRAGMA foreign_keys = ON");

# Create tables

scripts_path = os.path.dirname(__file__) + "\\scripts";
print("script path === ",scripts_path)
cur = conn.cursor();
file_path = scripts_path +  '\\createTables.sql';
print("file path ===",file_path)
if os.path.exists(file_path):
    print(file_path)


# Open and read the file as a single buffer
fd = open(file_path, 'r')
sqlFile = fd.read()
fd.close()

# all SQL commands (split on ';')
sqlCommands = sqlFile.split(';')



cur.execute("PRAGMA foreign_keys = ON");
# Execute every create table command from the input file

c_val = 0
for command in sqlCommands:
    c_val = c_val + 1
    try:
        print("  (",c_val,") =>",command )
        cur.execute(command)       
        
        '''
        rows = cur.fetchall()
        print("names after ................................")
        for row in rows:
            print(row)
           '''
    except Exception as msg:
        print("Command skipped: ", msg)



''' insert into  table'''

file_path = scripts_path +  '\\insert.sql';
print("insert into table file path ===",file_path)
if os.path.exists(file_path):
    print(file_path)


# Open and read the file as a single buffer
fd = open(file_path, 'r')
sqlFile = fd.read()
fd.close()

# all SQL commands (split on ';')
sqlCommands = sqlFile.split(';')



cur.execute("PRAGMA foreign_keys = ON");
# Execute every create table command from the input file

c_val = 0
for command in sqlCommands:
    c_val = c_val + 1
    try:
        print("  (",c_val,") =>",command )
        cur.execute(command)       
        
        '''
        rows = cur.fetchall()
        print("names after ................................")
        for row in rows:
            print(row)
           '''
    except Exception as msg:
        print("Command skipped: ", msg);
conn.commit();



''' fetching data from tables'''



file_path = scripts_path +  '\\select.sql';
print("select data from table file path ===",file_path)
if os.path.exists(file_path):
    print(file_path)

# Open and read the file as a single buffer
fd = open(file_path, 'r')
sqlFile = fd.read()
fd.close()

# all SQL commands (split on ';')
sqlCommands = sqlFile.split(';')



cur.execute("PRAGMA foreign_keys = ON");
# Execute every create table command from the input file

c_val = 0
for command in sqlCommands:
    c_val = c_val + 1
    try:
        print("  (",c_val,") =>",command )
        cur.execute(command)           
        
        rows = cur.fetchall()
        print("(",c_val,") print data from table ");
        for row in rows:
            print(row)
        
    except Exception as msg:
        print("Command skipped: ", msg);




''' update data from tables'''


command = update_scripts["dailyspan"]
cur.execute("PRAGMA foreign_keys = ON");
# Execute every create table command from the input file

c_val = 0
c_val = c_val + 1
try:
    
    print("  (",c_val,") =>",command )
    vals = (2,2, 'time')    

    cur.execute(command,vals)           
    conn.commit();


    
except Exception as msg:
    print("Command skipped: ", msg);
conn.commit();










''' fetching updated data from tables'''



file_path = scripts_path +  '\\select.sql';
print("select data from table file path ===",file_path)
if os.path.exists(file_path):
    print(file_path)

# Open and read the file as a single buffer
fd = open(file_path, 'r')
sqlFile = fd.read()
fd.close()

# all SQL commands (split on ';')
sqlCommands = sqlFile.split(';')



cur.execute("PRAGMA foreign_keys = ON");
# Execute every create table command from the input file

c_val = 0
for command in sqlCommands:
    c_val = c_val + 1
    try:
        print("  (",c_val,") =>",command )
        cur.execute(command)           
        
        rows = cur.fetchall()
        print("(",c_val,") print data from table ");
        for row in rows:
            print(row)
        
    except Exception as msg:
        print("Command skipped: ", msg);



conn.close();


'''


c.execute('SELECT {} FROM {} WHERE id=?'.format(column, table), row))


(l_id INTEGER PRIMARY KEY,
l_name VARCHAR(20) NOT NULL,
l_total INTEGER DEFAULT 0,
FOREIGN KEY(l_name) REFERENCES SERVICE(s_name));


'''