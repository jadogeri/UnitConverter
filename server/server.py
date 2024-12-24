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

CORS(app)
scheduler = BackgroundScheduler()
scheduler.add_job(job, 'interval', seconds=50)

@app.route('/')
def server():
   return 'Hello Server'

if __name__ == '__main__':
   # Development 
   # app.run(debug=True)
   #scheduler.start()
   

   # Production
   from waitress import serve
   serve(app, host=host, port=port)
