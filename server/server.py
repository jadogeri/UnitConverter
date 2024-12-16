"""
@author  Joseph Adogeri
@since   01-AUG-2024
@version 1.0   

"""
#!/usr/bin/env python


from flask_apscheduler import APScheduler
from app import *
from models.Time import *
from models.Geometry import *
from models.Temperature import *
from models.Cooking import *
from constants import port, host
import os


scheduler = APScheduler()
scheduler.init_app(app)


from apscheduler.schedulers.blocking import BlockingScheduler

def job():
    print("Executing my job!")

scheduler = BlockingScheduler()
scheduler.add_job(job, 'interval', seconds=10)
scheduler.start()

'''

@scheduler.task('interval', id='my_task', seconds=15)
def run_bash_script():
      import subprocess
      file_path = os.path.join(os.path.dirname(__file__), 'hello.sh')
      print(file_path)
      if os.path.exists(file_path):
         subprocess.call(['bash', file_path])  
      else:
         print("File not found:", file_path)
'''

# @scheduler.scheduled_job('interval', minutes=5)
# def my_job():
#     file_path = os.path.join(os.path.dirname(__file__), 'data.txt')
#     if os.path.exists(file_path):
#         with open(file_path, 'r') as f:
#             print(f.read())
#     else:
#         print("File not found:", file_path)


@app.route('/')
def server():
   return 'Hello Server'

if __name__ == '__main__':
   # Development 
   # app.run(debug=True)
   scheduler.start()

   # Production
   from waitress import serve
   serve(app, host=host, port=port)


'''


  from flask import Flask
   from flask_apscheduler import APScheduler

   app = Flask(__name__)

   scheduler = APScheduler()
   scheduler.init_app(app)

   @scheduler.task('interval', id='my_task', hours=1)
   def run_bash_script():
       import subprocess
       subprocess.call(['bash', '/path/to/your/script.sh'])

   if __name__ == '__main__':
       scheduler.start()
       app.run()

       


       from flask import Flask
from apscheduler.schedulers.background import BackgroundScheduler
import os

app = Flask(__name__)

scheduler = BackgroundScheduler()

@scheduler.scheduled_job('interval', minutes=5)
def my_job():
    file_path = os.path.join(os.path.dirname(__file__), 'data.txt')
    if os.path.exists(file_path):
        with open(file_path, 'r') as f:
            print(f.read())
    else:
        print("File not found:", file_path)

if __name__ == '__main__':
    scheduler.start()
    app.run(debug=True)

'''