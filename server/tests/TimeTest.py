
import requests
import unittest
import sys

from os.path import dirname, abspath
dir = dirname(dirname(abspath(__file__)))
dir_tests = dir +'\\tests';
sys.path.append(dir_tests)
sys.path.append(dir)
from constants import *


class TimeTest(unittest.TestCase):

   
    def setUp(self):
 
        print("SETUP called ...");
        # Arrange 

        self.seconds1 : int = 60;
        self.seconds2: int = 3600;
        self.seconds3 : int = 86400;
        self.seconds4 : int = 31536000;
        self.num :int = 1;
     
    def tearDown(self) :
        print("TEARDOWN called ...");

        self.secondes1 = 0;
        self.secondes1 = 0;
        self.secondes1 = 0;
           
    def test_seconds_to_minutes(self):
        #Act
        # result = make_request(self.num1)

        try:
            #Act
            response = requests.get(f'{base_url}/time/secondsToMinutes?seconds={self.seconds1}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 1.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e

    def test_seconds_to_hours(self):
        #Act
        # result = make_request(self.num1)

        try:
            #Act
            response = requests.get(f'{base_url}/time/secondsToHours?seconds={self.seconds2}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 1.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e
        
    def test_seconds_to_days(self):
        #Act
        # result = make_request(self.num1)

        try:
            #Act
            response = requests.get(f'{base_url}/time/secondsToDays?seconds={self.seconds3}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 1.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e
        
    def test_seconds_to_years(self):
        #Act
        # result = make_request(self.num1)

        try:
            #Act
            response = requests.get(f'{base_url}/time/secondsToYears?seconds={self.seconds4}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 1.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e
        
    def test_minutes_to_seconds(self):
            #Act
        try:
            #Act
            response = requests.get(f'{base_url}/time/minutesToSeconds?minutes={self.num}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 60.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e

    def test_hours_to_seconds(self):
        #Act
        # result = make_request(self.num1)

        try:
            #Act
            response = requests.get(f'{base_url}/time/hoursToSeconds?hours={self.num}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 3600.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e
        
    def test_days_to_seconds(self):

        try:
            #Act
            response = requests.get(f'{base_url}/time/daysToSeconds?days={self.num}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result,self.seconds3)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e
        
    def test_years_to_seconds(self):

        try:
            #Act
            response = requests.get(f'{base_url}/time/yearsToSeconds?years={self.num}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, self.seconds4)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e
        
 



if __name__ == "__main__":
    unittest.main()



'''


#Returns number of seconds from minutes, 1 minute = 60 seconds
@app.route('/api/time/minutesToSeconds')
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
@app.route('/api/time/hoursToSeconds')
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
@app.route('/api/time/daysToSeconds')
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
@app.route('/api/time/yearsToSeconds')
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





'''