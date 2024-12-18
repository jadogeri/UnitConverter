import sqlite3
import os
# Connect to the database (or create it if it doesn't exist)
print("connecting to database....................");
conn = sqlite3.connect('./database/example.db')
# Create a cursor object
cur = conn.cursor()

# Enable foreign key support
cur.execute("PRAGMA foreign_keys = ON");
# Create a table
cur.execute('''
CREATE TABLE IF NOT EXISTS students (
id INTEGER PRIMARY KEY,
name TEXT NOT NULL,
age INTEGER,
grade TEXT
)
''')
# Commit the changes and close the connection
print("initialized database....................");
conn.commit()
print("closed database....................");
conn.close()

# 3. Creating a Database and Table



# Connect to the database (or create it if it doesn't exist)
conn = sqlite3.connect('example.db')
# Create a cursor object
cur = conn.cursor()
# Create a table
cur.execute('''
CREATE TABLE IF NOT EXISTS students (
id INTEGER PRIMARY KEY,
name TEXT NOT NULL,
age INTEGER,
grade TEXT
)
''')
# Commit the changes and close the connection
conn.commit()
conn.close()
#4. Inserting Data (Create)

# Connect to the database
conn = sqlite3.connect('./database/example.db')
cur = conn.cursor()
# Insert data
cur.execute('''
INSERT INTO students (name, age, grade)
VALUES ('Alice', 21, 'A')
''')
cur.execute('''
INSERT INTO students (name, age, grade)
VALUES ('Bob', 22, 'B')
''')
cur.execute('''
INSERT INTO students (name, age, grade)
VALUES ('Charlie', 23, 'C')
''')
cur.execute('''
INSERT INTO students (name, age, grade)
VALUES ('Mike', 23, 'A')
''')
cur.execute('''
INSERT INTO students (name, age, grade)
VALUES ('Joseph', 23, 'B')
''')
# Commit the changes and close the connection
conn.commit()
conn.close()
# 5. Fetching Data (Read)

# Connect to the database
conn = sqlite3.connect('./database/example.db')
cur = conn.cursor()
# Fetch data
cur.execute('SELECT * FROM students')
rows = cur.fetchall()
# Print the results
'''
for row in rows:
    print(row)
# Close the connection
'''
conn.close()
# 6. Updating Data (Update)


# Connect to the database
conn = sqlite3.connect('./database/example.db')
cur = conn.cursor()
# Update data
cur.execute('''
UPDATE students
SET grade = 'A'
WHERE name = 'Bob'
''')
# Commit the changes and close the connection
conn.commit()
conn.close()
# 7. Deleting Data (Delete)


# Connect to the database
conn = sqlite3.connect('./database/example.db')
cur = conn.cursor()
# Delete data
cur.execute('''
DELETE FROM students
WHERE name = 'Charlie'
''')
# Commit the changes and close the connection
conn.commit()
conn.close()

print("after deleting charlie")
# Connect to the database
conn = sqlite3.connect('./database/example.db')
cur = conn.cursor()
# Fetch data
cur.execute('SELECT * FROM students')
rows = cur.fetchall()
# Print the results
'''
for row in rows:
    print(row)
 
'''
# Close the connection
conn.close()
# 6. Updating Data (Update)


#.................testing
c = sqlite3.connect('./database/example.db')
cur = c.cursor();
file_path = os.path.join(os.path.dirname(__file__), 'scripts\\test.sql')
print(file_path)
if os.path.exists(file_path):
    print(file_path)


# Open and read the file as a single buffer
fd = open(file_path, 'r')
sqlFile = fd.read()
fd.close()

# all SQL commands (split on ';')
sqlCommands = sqlFile.split(';')

# Execute every command from the input file
for command in sqlCommands:
    # This will skip and report errors
    # For example, if the tables do not yet exist, this will skip over
    # the DROP TABLE commands
    try:
        cur.execute(command)
        # Fetch data
        
        rows = cur.fetchall()
        print("names after ................................")
        for row in rows:
            print(row)
    except Exception as msg:
        print("Command skipped: ", msg)



# Connect to the database
conn = sqlite3.connect('./database/example.db')
cur = conn.cursor()
# Delete all data
cur.execute('''
DELETE FROM students
''')
# Commit the changes and close the connection
conn.commit()
conn.close()

c = sqlite3.connect('./database/example.db')
cur = c.cursor();
file_path = os.path.join(os.path.dirname(__file__), 'scripts\\createTables.sql')
print(file_path)
if os.path.exists(file_path):
    print(file_path)


# Open and read the file as a single buffer
fd = open(file_path, 'r')
sqlFile = fd.read()
fd.close()

# all SQL commands (split on ';')
sqlCommands = sqlFile.split(';')

# Execute every command from the input file
for command in sqlCommands:
    # This will skip and report errors
    # For example, if the tables do not yet exist, this will skip over
    # the DROP TABLE commands
    try:
        cur.execute(command)
        # Fetch data
        
        rows = cur.fetchall()
        print("names after ................................")
        for row in rows:
            print(row)
    except Exception as msg:
        print("Command skipped: ", msg)