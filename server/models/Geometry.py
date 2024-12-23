"""
@author  Joseph Adogeri
@since   12-DEC-2024
@version 1.0   

"""

import math as Math
import sys 
from os.path import dirname, abspath

from flask import request
dir = dirname(dirname(abspath(__file__)))

sys.path.append(dir)
from app import *  

@app.route('/api/geometry/getAreaRectangle')
def getAreaRectangle( width : float = None, length : float = None):
    try:
        area : float;
        width_string = request.args.get('width');
        length_string = request.args.get('length');
        if (width is not None and length is not None):
            area = width * length;  
            return str(area);       
        elif ( width_string is None and length_string is None):
            area = width * length;   
            return str(area)        
        elif ( width_string is not None and length_string is not None ):
            width = float(width_string);
            length = float(length_string);
            area = width * length; 
            return str(area)
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400


@app.route('/api/geometry/getAreaCircle')
def getAreaCircle( radius : float = None):
    try:
        print(request.args.get('radius'))
        area : float;
        radius_string = request.args.get('radius');
        if (radius is not None):
            area = round(Math.pi,2) * radius**2;  
            return str(area);       
        # elif ( radius_string is None):
        #     area = round(Math.pi,2) * radius**2;   
        #     return str(area)        
        elif ( radius_string is not None ):
            radius = float(radius_string);
            area = round(Math.pi,2) * radius**2;  
            return str(area)
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400

@app.route('/api/geometry/getAreaTriangle')
def getAreaTriangle( base : float = None, height : float = None):
    area : float;
    try:
        base_string = request.args.get('base');
        height_string = request.args.get('height');
        if ( base is not None and height is not None):
            area = 0.5 * base * height;  
            return str(area);    
 
        elif ( base_string is not None and height_string is not None ):
            base = float(base_string);
            height = float(height_string);
            area = 0.5 * base * height; 
            return str(area)
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400

@app.route('/api/geometry/getPerimeterRectangle')
def getPerimeterRectangle( width : float = None, length : float = None):
    perimeter : float;
    try:    
        width_string = request.args.get('width');
        length_string = request.args.get('length');
        if (width is not None and length is not None):
            perimeter = 2 * ( width + length ); 
            return str(perimeter);       
        elif ( width_string is not None and length_string is not None ):
            width = float(width_string);
            length = float(length_string);
            perimeter = 2 * ( width + length ); 
            return str(perimeter)
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400


@app.route('/api/geometry/getPerimeterCircle')
def getPerimeterCircle( radius : float = None):
    perimeter : float;
    try:
        radius_string = request.args.get('radius');
        if (radius is not None):
            perimeter = 2 * round(Math.pi,2) * radius; 
            return str(perimeter);       
     
        elif ( radius_string is not None ):
            radius = float(radius_string);
            perimeter = 2 * round(Math.pi,2) * radius;  
            return str(perimeter)
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400
    

@app.route('/api/geometry/getPerimeterTriangle')
def getPerimeterTriangle( side1 : float = None, side2 : float = None, side3 : float = None):
    perimeter : float;
    try:        
        side1_string = request.args.get('side1');
        side2_string = request.args.get('side2');
        side3_string = request.args.get('side3');

        if (side1 is not None and side2 is not None and side3 is not None):
            perimeter = side1 + side2 + side3;  
            return str(perimeter);       
     
        elif (side1_string is not None and side2_string is not None and side3_string is not None):
            side1 = float(side1_string);
            side2 = float(side2_string);
            side3 = float(side3_string);

            perimeter = side1 + side2 + side3;  
            return str(perimeter);  
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400


