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

class GeometryTest(unittest.TestCase):

   
    def setUp(self):
 
        print("SETUP called ...");
        # Arrange 

        self.length = 10.0
        self.width = 10.0
        self.base = 10.0
        self.height = 2.0
        self.radius = 5.64
        self.radius2 = 15.92
        self.side1 = 10.0
        self.side2 = 5.0
        self.side3 = 15.0


    def tearDown(self) :
        print("TEARDOWN called ...");
        self.length = 0
        self.width = 0
        self.base = 0
        self.height = 0
        self.radius = 0
        self.side1 = 0
        self.side2 = 0
        self.side3 = 0

    def test_area_of_rectangle(self):

        try:
            #Act
            response = requests.get(f'{base_url}/geometry/getAreaRectangle?width={self.width}&length={self.length}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 100.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e

    def test_area_of_circle(self):

        try:
            #Act
            response = requests.get(f'{base_url}/geometry/getAreaCircle?radius={self.radius}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(round(result), 100.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e
        
    def test_area_of_triangle(self):

        try:
            #Act
            response = requests.get(f'{base_url}/geometry/getAreaTriangle?base={self.base}&height={self.height}')

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
        
    def test_perimeter_of_rectangle(self):
        try:
            #Act
            response = requests.get(f'{base_url}/geometry/getPerimeterRectangle?width={self.width}&length={self.length}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 40.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e
        
    def test_perimeter_of_circle(self):
            #Act
        try:
            #Act
            response = requests.get(f'{base_url}/geometry/getPerimeterCircle?radius={self.radius2}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(round(result), 100.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e

    def test_perimeter_of_triangle(self):
        #Act
        # result = make_request(self.num1)

        try:
            #Act
            response = requests.get(f'{base_url}/geometry/getPerimeterTriangle?side1={self.side1}&side2={self.side2}&side3={self.side3}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 30.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e
        
 
 
