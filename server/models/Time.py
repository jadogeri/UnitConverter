import math as Math
import sys 
from os.path import dirname, abspath

from flask import request
dir = dirname(dirname(abspath(__file__)))
print("absolute path === ",dir)

sys.path.append(dir)
from app import *  

#Returns number of minutes from seconds, 1 minute = 60 seconds
@app.route('/time/secondsToMinutes')
def secondsToMinutes(seconds : int = None):
    try:
        minutes : float;
        seconds_string = request.args.get('seconds');
        if (seconds is not None):
            minutes = round(seconds / 60,2);
            return str(minutes);       
        elif ( seconds_string is not None ):
            seconds = float(seconds_string);
            minutes = round(seconds / 60,2);
            return str(minutes);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400

#Returns number of hours from seconds, 1 hour = 60 minutes
@app.route('/time/secondsToHours')
def secondsToHours( seconds : int = None): 
    try:
        minutes : float;
        hours : float;
        seconds_string = request.args.get('seconds');
        if (seconds is not None):
            #convert seconds to minutes i.e 1 minute = 60 seconds
            minutes = seconds / 60;    
            #convert minutes to hours    
            hours = round(minutes / 60,2);
            return str(hours);   
        elif ( seconds_string is not None ):
            seconds = float(seconds_string);
            #convert seconds to minutes i.e 1 minute = 60 seconds
            minutes = seconds / 60;    
            #convert minutes to hours    
            hours = round(minutes / 60,2);
            return str(hours);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400


#Returns number of days from seconds, 1 day = 24 hours
@app.route('/time/secondsToDays')
def secondsToDays(seconds : int = None): 
    try:
        minutes : float;
        hours : float;
        days : float;
        seconds_string = request.args.get('seconds');
        if (seconds is not None):
            #convert seconds to minutes 
            minutes = seconds / 60;    
            #convert minutes to hours    
            hours = minutes / 60;
            #convert hours to days  
            days = round(hours / 24,2);
            return str(days);
        elif ( seconds_string is not None ):
            seconds = float(seconds_string);
            #convert minutes to hours   
            minutes = seconds / 60;    
            #convert minutes to hours    
            hours = minutes / 60;
            #convert hours to days  
            days = round(hours / 24,2);
            return str(days);
        else : 
            return None;
    except Exception as e:
        print(e)
        return "Invalid data in query string", 400


#Returns number of years from seconds, 1 year = 365 days
@app.route('/time/secondsToYears')
def secondsToYears(seconds : int = None): 
    try:
        minutes : float;
        hours : float;
        days : float;
        years : float;
        seconds_string = request.args.get('seconds');
        if (seconds is not None):
            #convert seconds to minutes 
            minutes = seconds / 60;    
            #convert minutes to hours    
            hours = minutes / 60;
            #convert hours to days  
            days = hours / 24;
            #convert days to years
            years = round(days / 365,2);
            return str(years);
        elif ( seconds_string is not None ):
            seconds = float(seconds_string);
            #convert minutes to hours   
            minutes = seconds / 60;    
            #convert minutes to hours    
            hours = minutes / 60;
            #convert hours to days  
            days = hours / 24;
            #convert days to years
            years = round(days / 365,2);
            return str(years);
        else : 
            return None;

    except Exception as e:
        print(e)
        return "Invalid data in query string", 400


#Returns number of seconds from minutes, 1 minute = 60 seconds
@app.route('/time/minutesToSeconds')
def minutesToSeconds(minutes : float = None): 
    try:
        seconds : float;
        minutes_string = request.args.get('minutes');
        if (minutes is not None):
            seconds = minutes * 60;
            return str(seconds);
        elif ( minutes_string is not None ):
            minutes = float(minutes_string);
            seconds = minutes * 60;
            return str(seconds);
        else:
            return None;


    except Exception as e:
        print(e)
        return "Invalid data in query string", 400

#Returns number of seconds from hours, 1 hour = 60 minutes
@app.route('/time/hoursToSeconds')
def hoursToSeconds(hours : float = None):
    try:
        minutes : float;
        seconds : float;
        hours_string = request.args.get('hours');
        if (hours is not None):
            #convert hours to minutes i.e 60 minutes = i hour
            minutes = hours * 60;    
            #convert minutes to seconds  
            seconds = minutes * 60
            return str(seconds);
        elif ( hours_string is not None ):
            hours = float(hours_string);
            #convert hours to minutes i.e 60 minutes = i hour
            minutes = hours * 60;    
            #convert minutes to seconds  
            seconds = minutes * 60
            return str(seconds);
        else:
            return None;

    except Exception as e:
        print(e)
        return "Invalid data in query string", 400


#Returns number of seconds from days, 1 day = 24 hours
@app.route('/time/daysToSeconds')
def daysToSeconds(days : float = None):
    try:
        minutes : float;
        hours : float;
        seconds : float;
        days_string = request.args.get('days');
        if (days is not None):
            #convert days to hours
            hours = days * 24;    
            #convert hours to minutes   
            minutes = hours * 60;
            #convert minutes to seconds
            seconds = minutes * 60;
            return str(seconds);
        elif ( days_string is not None ):
            days = float(days_string);
            #convert days to hours
            hours = days * 24;    
            #convert hours to minutes   
            minutes = hours * 60;
            #convert minutes to seconds
            seconds = minutes * 60;
            return str(seconds);
        else:
            return None;

    except Exception as e:
        print(e)
        return "Invalid data in query string", 400


#Returns number of seconds from hours, 1 year = 365 days
@app.route('/time/yearsToSeconds')
def yearsToSeconds(years : float = None): 
    try:
        minutes : float;
        hours : float;
        days : float;
        seconds : float;
        years_string = request.args.get('years');
        if (years is not None):
            #convert years to days 
            days = years * 365;    
            #convert days to hours    
            hours = days * 24;
            #convert hours to minutes
            minutes = hours * 60;
            #convert minutes to seconds
            seconds = minutes * 60;
            return str(seconds);
        elif ( years_string is not None ):
            years = float(years_string);
            #convert years to days 
            days = years * 365;    
            #convert days to hours    
            hours = days * 24;
            #convert hours to minutes
            minutes = hours * 60;
            #convert minutes to seconds
            seconds = minutes * 60;
            return str(seconds);

    except Exception as e:
        print(e)
        return "Invalid data in query string", 400



