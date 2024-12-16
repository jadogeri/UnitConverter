"""
@author  Joseph Adogeri
@since   01-AUG-2024
@version 1.0   

"""

from app import *
from models.Time import *
from models.Geometry import *
from models.Temperature import *
from models.Cooking import *
from constants import port, host
from apscheduler.schedulers.blocking import BlockingScheduler
from database.init import *

def job():
    print("Executing my job!")

scheduler = BlockingScheduler()
scheduler.add_job(job, 'interval', seconds=10)

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

