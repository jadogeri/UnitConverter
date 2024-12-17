from flask import Flask
from flask_apscheduler import APScheduler
from rq import Queue
from worker import conn

app = Flask(__name__)
scheduler = APScheduler()
queue = Queue(connection=conn)

@scheduler.task('interval', id='my_job', seconds=30)
def my_job():
    queue.enqueue(long_running_task)

def long_running_task():
    # Perform time-consuming operations here

if __name__ == '__main__':
    scheduler.init_app(app)
    scheduler.start()
    app.run()