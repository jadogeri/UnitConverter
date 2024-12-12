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

class CookingTest(unittest.TestCase):

   
    def setUp(self):
 
        print("SETUP called ...");
        # Arrange 

        self.teaspoons = 3.0
        self.tablespoons = 1.0
        self.tablespoons2 = 16.0
        self.cups = 1.0
        self.cups2 = 2.0
        self.ounces = 8.0
        self.pints = 1.0

    def tearDown(self) :
        print("TEARDOWN called ...");
        self.teaspoons = 0.0
        self.tablespoons = 0.0
        self.tablespoons2 = 0.0
        self.cups = 0.0
        self.cups2 = 0.0
        self.ounces = 0.0
        self.pints = 0.0

    def test_teaspoons_to_tablespoons(self):
        try:
            #Act
            response = requests.get(f'{base_url}/cooking/teaspoonsToTablespoons?teaspoons={self.teaspoons}')

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

    def test_tablespoons_to_teaspoons_(self):

        try:
            #Act
            response = requests.get(f'{base_url}/cooking/tablespoonsToTeaspoons?tablespoons={self.tablespoons}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 3.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e

    def test_tablespoons_to_cups_(self):
        try:
            #Act
            response = requests.get(f'{base_url}/cooking/tablespoonsToCups?tablespoons={self.tablespoons2}')

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

    def test_cups_to_tablespoons(self):

        try:
            #Act
            response = requests.get(f'{base_url}/cooking/cupsToTablespoons?cups={self.cups}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 16.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e

    def test_ounces_to_cups(self):
        try:
            #Act
            response = requests.get(f'{base_url}/cooking/ouncesToCups?ounces={self.ounces}')

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

    def test_cups_to_ounces(self):

        try:
            #Act
            response = requests.get(f'{base_url}/cooking/cupsToOunces?cups={self.cups}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 8.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e

    def test_pints_to_cups(self):
        try:
            #Act
            response = requests.get(f'{base_url}/cooking/pintsToCups?pints={self.pints}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 0.5)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e

    def test_cups_to_pints(self):

        try:
            #Act
            response = requests.get(f'{base_url}/cooking/cupsToPints?cups={self.cups2}')

            if response.status_code == 200:
                print(response.status_code)
                result = response.json();
            #Assert
                self.assertEqual(result, 4.0)
            else:
                print('Error:',response.status_code,response.json())
                return response

        except requests.exceptions.RequestException as e:
            print('Error:==', e)
            return e

if __name__ == "__main__":
    unittest.main()



