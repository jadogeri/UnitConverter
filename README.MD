https://medium.com/pythoneers/learning-sqlite3-in-python-basic-crud-operations-2cdad0256dad


https://abhishekkumar-0311.medium.com/how-to-use-sql-in-python-jupyter-notebook-8633e7502035



https://www.javatpoint.com/apschedular-python-example
----------------------------------------------------------
----------------------------------------------------------


-1.1

SELECT ANAME,zookeepid
FROM ANIMAL, HANDLES
WHERE AID=ANIMALID;
--1.2

SELECT ZNAME, SUM(TIMETOFEED)
FROM ZOOKEEPER, ANIMAL, HANDLES
WHERE AID=ANIMALID AND ZOOKEEPID=ZID
GROUP BY zookeeper.zname;








Your code already contains a beautiful way to execute all statements from a specified sql file

# Open and read the file as a single buffer
fd = open('ZooDatabase.sql', 'r')
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
        c.execute(command)
    except OperationalError, msg:
        print("Command skipped: ", msg)
Wrap this in a function and you can reuse it.

def executeScriptsFromFile(filename):
    # Open and read the file as a single buffer
    fd = open(filename, 'r')
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
            c.execute(command)
        except OperationalError, msg:
            print("Command skipped: ", msg)