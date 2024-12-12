"""
@author  Joseph Adogeri
@since   12-DEC-2024
@version 1.0   

"""
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
    
