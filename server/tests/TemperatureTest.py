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
print(base_url)

class TemperatureTest(unittest.TestCase):

   
    def setUp(self):
 
        print("SETUP called ...");
        # Arrange 

        self.celcius = -12.22
        self.celcius2 = -272.15
        self.fahrenheit = 50.0
        self.kelvin = 283.15

    def tearDown(self) :
        print("TEARDOWN called ...");
        self.celcius = 0.0
        self.celcius2 = 0.0
        self.fahrenheit = 0.0
        self.kelvin = 0.0

    def test_celcius_to_fahrenheit(self):

        try:
            #Act
            response = requests.get(f'{base_url}/temperature/celciusToFahrenheit?celcius={self.celcius}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 10.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e

    def test_celcius_to_kelvin(self):

        try:
            #Act
            response = requests.get(f'{base_url}/temperature/celciusToKelvin?celcius={self.celcius2}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(round(result), 1.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e
        
    def test_fahrenheit_to_celcius(self):

        try:
            #Act
            response = requests.get(f'{base_url}/temperature/fahrenheitToCelcius?fahrenheit={self.fahrenheit}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 10.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e
        
    def test_fahrenheit_to_kelvin(self):
        try:
            #Act
            response = requests.get(f'{base_url}/temperature/fahrenheitToKelvin?fahrenheit={self.fahrenheit}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 283.15)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e
        
    def test_kelvin_to_fahrenheit(self):

        try:
            #Act
            response = requests.get(f'{base_url}/temperature/kelvinToFahrenheit?kelvin={self.kelvin}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(round(result), 50.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e

    def test_kelvin_to_celcius(self):

        try:
            #Act
            response = requests.get(f'{base_url}/temperature/kelvinToCelcius?kelvin={self.kelvin}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 10.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e
        
 
 
if __name__ == "__main__":
    unittest.main()

