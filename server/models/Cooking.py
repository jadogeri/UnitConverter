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

def tablespoonsToCups(tablespoons : float = None):
    try:
        cups : float;
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
# static double cupsToTablespoons(double cups) Returns number of TBSPs from CUPs, 1 cup = 16 tablespoons

def cupsToTablespoons(cups : float = None):
    pass;
# static double ouncesToCups(double ounces) Returns number of CUPs from OUNCEs, 1 cup = 8 ounces


def ouncesToCups(ounces : float = None):
    pass;
# static double cupsToOunces(double cups) Returns number of OUNCEs from CUPs, 1 cup = 8 ounces

def cupsToOunces(cups : float = None):
    pass;
# static double cupsToPints(double cups) Returns number of PINTs from CUPs, 1 pint = 2 cups

def cupsToPints(cups : float = None):
    pass;
# static double pintsToCups(double pints) Returns number of CUPs from PINTs, 1 pint = 2 cups

def pintsToCups(pints : float = None):
    pass;