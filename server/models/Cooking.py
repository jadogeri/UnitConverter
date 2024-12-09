import math as Math
import sys 
from os.path import dirname, abspath

from flask import request
dir = dirname(dirname(abspath(__file__)))
print("absolute path === ",dir)

sys.path.append(dir)
from app import *  

# static double teaspoonsToTablespoons(double teaspoons) Returns number of TBSPs from TSP, 1 tablespoon = 3 teaspoons

@app.route('/cooking/teaspoonsToTablespoons')
def teaspoonsToTablespoons(teaspoons : float = None):

    try:
        tablespoons : float;
        teaspoons_string = request.args.get('teaspoons');
        if (teaspoons is not None):
            tablespoons = round(teaspoons / 3,2);
            return str(tablespoons);       
        elif ( teaspoons_string is not None ):
            teaspoons = float(teaspoons_string);
            tablespoons = round(teaspoons / 3,2);
            return str(tablespoons);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400
    
@app.route('/cooking/tablespoonsToTeaspoons')
def tablespoonsToTeaspoons(tablespoons : float = None):
    try:
        teaspoons : float;
        tablespoons_string = request.args.get('tablespoons');
        if (tablespoons is not None):
            teaspoons = round(tablespoons * 3,2);
            return str(teaspoons);       
        elif ( tablespoons_string is not None ):
            tablespoons = float(tablespoons_string);
            teaspoons = round(tablespoons * 3,2);
            return str(teaspoons);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400

# static double cupsToTablespoons(double cups) Returns number of TBSPs from CUPs, 1 cup = 16 tablespoons
@app.route('/cooking/tablespoonsToCups')

def tablespoonsToCups(tablespoons : float = None):

    try:
        cups : float;
        tablespoons_string = request.args.get('tablespoons');
        if (tablespoons is not None):
            cups = round(tablespoons / 16,2);
            return str(cups);       
        elif ( tablespoons_string is not None ):
            tablespoons = float(tablespoons_string);
            cups = round(tablespoons / 16,2);
            return str(cups);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400
    
# static double cupsToTablespoons(double cups) Returns number of TBSPs from CUPs, 1 cup = 16 tablespoons

@app.route('/cooking/cupsToTablespoons')

def cupsToTablespoons(cups : float = None):
    try:
        tablespoons : float;
        cups_string = request.args.get('cups');
        if (cups is not None):
            tablespoons = round(cups * 16,2);
            return str(tablespoons);       
        elif ( cups_string is not None ):
            cups = float(cups_string);
            tablespoons = round(cups * 16,2);
            return str(tablespoons);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400
   
# static double ouncesToCups(double ounces) Returns number of CUPs from OUNCEs, 1 cup = 8 ounces

@app.route('/cooking/ouncesToCups')

def ouncesToCups(ounces : float = None):

    try:
        cups : float;
        ounces_string = request.args.get('ounces');
        if (ounces is not None):
            cups = round(ounces / 8,2);
            return str(cups);       
        elif ( ounces_string is not None ):
            ounces = float(ounces_string);
            cups = round(ounces / 8,2);
            return str(cups);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400
    
# static double cupsToounces(double cups) Returns number of TBSPs from CUPs, 1 cup = 8 ounces


@app.route('/cooking/cupsToOunces')

def cupsToounces(cups : float = None):
    try:
        ounces : float;
        cups_string = request.args.get('cups');
        if (cups is not None):
            ounces = round(cups * 8,2);
            return str(ounces);       
        elif ( cups_string is not None ):
            cups = float(cups_string);
            ounces = round(cups * 8,2);
            return str(ounces);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400
# static double cupsToPints(double cups) Returns number of PINTs from CUPs, 1 cup = 0.5 pints

@app.route('/cooking/cupsToPints')

def cupsToPints(cups : float = None):

    try:
        pints : float;
        cups_string = request.args.get('cups');
        if (cups is not None):
            pints = round(cups / 0.5,2);
            return str(pints);       
        elif ( cups_string is not None ):
            cups = float(cups_string);
            pints = round(cups / 0.5,2);
            return str(pints);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400
    
   
# static double pintsTocups(double pints) Returns number of TBSPs from pints, 1 cup = 0.5 pints

@app.route('/cooking/pintsToCups')

def pintsToCups(pints : float = None):
    try:
        cups : float;
        pints_string = request.args.get('pints');
        if (pints is not None):
            cups = round(pints * 0.5,2);
            return str(cups);       
        elif ( pints_string is not None ):
            pints = float(pints_string);
            cups = round(pints * 0.5,2);
            return str(cups);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400