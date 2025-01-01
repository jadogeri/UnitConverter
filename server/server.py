"""
@author  Joseph Adogeri
@since   01-AUG-2024
@version 1.0   

"""
from flask_cors import CORS
from app import *
from models.Record import *
from models.Time import *
from models.Geometry import *
from models.Temperature import *
from models.Cooking import *
from constants import port, host
from apscheduler.schedulers.background import BackgroundScheduler
from database.init import *
from database.functions.resetDailySpanJob import job
from apscheduler.triggers.cron import CronTrigger


CORS(app)
scheduler = BackgroundScheduler()

'''
trigger = CronTrigger(
      year="*", month="*", day="*", hour="12", minute="", second="10"
   )
trigger = CronTrigger(hour=0, minute=0)
scheduler.add_job(job, trigger=trigger)
#scheduler.add_job(job, 'interval', seconds=100)
'''
scheduler.add_job(job, 'interval', seconds=60)



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
