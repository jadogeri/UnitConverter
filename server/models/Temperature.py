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

# static double celsiusToFahrenheit(double celsius) Returns degrees Fahrenheit from degrees Celsius, F= 9 C +32 5
@app.route('/api/temperature/celciusToFahrenheit')

def celciusToFahrenheit(celcius : float = None):

    try:
        fahrenheit : float;
        celcius_string = request.args.get('celcius');
        if (celcius is not None):
            fahrenheit = round((celcius * 9/5) + 32,2);
            return str(fahrenheit);       
        elif ( celcius_string is not None ):
            celcius = float(celcius_string);
            fahrenheit = round((celcius * 9/5) + 32,2);
            return str(fahrenheit);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400
    

# static double celsiusToKelvin(double celsius) Returns degrees Kelvin from degrees Celsius, K =C +273.15
@app.route('/api/temperature/celciusToKelvin')

def celciusToKelvin(celcius : float = None):
    try:
        kelvin : float;
        celcius_string = request.args.get('celcius');
        if (celcius is not None):
            kelvin = round(celcius + 273.15,2);
            return str(kelvin);       
        elif ( celcius_string is not None ):
            celcius = float(celcius_string);
            kelvin = round(celcius + 273.15,2);
            return str(kelvin);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400
    


# static double fahrenheitToCelsius(double fahrenheit) Returns degrees Celsius from degrees Fahrenheit, C= 5 ( F−32) 9

@app.route('/api/temperature/fahrenheitToCelcius')
def fahrenheitToCelcius(fahrenheit : float = None):
    try:
        celcius : float;
        fahrenheit_string = request.args.get('fahrenheit');
        if (fahrenheit is not None):
            celcius = round((fahrenheit - 32) * 5/9,2);
            return str(celcius);       
        elif ( fahrenheit_string is not None ):
            fahrenheit = float(fahrenheit_string);
            celcius = round((fahrenheit - 32) * 5/9,2);
            return str(celcius);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400
# static double fahrenheitToKelvin(double fahrenheit) Returns degrees Kelvin from degrees Fahrenheit, K= 5 ( F +459.67) 9

@app.route('/api/temperature/fahrenheitToKelvin')

def fahrenheitToKelvin(fahrenheit : float = None):
    try:
        kelvin : float;
        fahrenheit_string = request.args.get('fahrenheit');
        if (fahrenheit is not None):
            kelvin = round((fahrenheit + 459.67) * 5/9,2);
            return str(kelvin);       
        elif ( fahrenheit_string is not None ):
            fahrenheit = float(fahrenheit_string);
            kelvin = round((fahrenheit + 459.67) * 5/9,2);
            return str(kelvin);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400
# static double kelvinToFahrenheit(double kelvin) Returns degrees Fahrenheit from degrees Kelvin, F= 9 K −459.67 5

@app.route('/api/temperature/kelvinToFahrenheit')

def kelvinToFahrenheit(kelvin : float = None):

    try:
        fahrenheit : float;
        kelvin_string = request.args.get('kelvin');
        if (kelvin is not None):
            fahrenheit = round((kelvin * 9/5) - 459.67,2);
            return str(fahrenheit);       
        elif ( kelvin_string is not None ):
            kelvin = float(kelvin_string);
            fahrenheit = round((kelvin * 9/5) - 459.67,2);
            return str(fahrenheit);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400
# static double kelvinToCelsius(double kelvin) Returns degrees Celsius from degrees Kelvin, C=K−273.15
@app.route('/api/temperature/kelvinToCelcius')

def kelvinToCelcius(kelvin : float = None):

    try:
        celcius : float;
        kelvin_string = request.args.get('kelvin');
        if (kelvin is not None):
            celcius = round(kelvin - 273.15,2);
            return str(celcius);       
        elif ( kelvin_string is not None ):
            kelvin = float(kelvin_string);
            celcius = round(kelvin - 273.15,2);
            return str(celcius);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400
    

    