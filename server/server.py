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

@app.route('/')
def server():
   return 'Hello Server'

if __name__ == '__main__':
   # Development 
   # app.run(debug=True)

   # Production
   from waitress import serve
   serve(app, host="0.0.0.0", port=8080)
