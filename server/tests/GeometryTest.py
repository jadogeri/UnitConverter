

import pytest
import requests
import unittest
import sys
from pytest_mock import MockFixture

from os.path import dirname, abspath
dir = dirname(dirname(abspath(__file__)))
print("path ===",dir)

dir_models = dir +'\\models'
print(dir_models)

dir_tests = dir +'\\tests';


sys.path.append(dir_models)
sys.path.append(dir_tests)


base_url = "http://localhost:5000/api"
print("calling time........................................................")
# def test_url():
#     # Arrange:
#     seconds = 60
#     minutes = 60
#     hour = 24
#     #Act:
#     response = make_request()
#     print("response object ===", response)
#     #Assertion:
#     assert response.status_code == 200  # Validation of status code  
#     data = response.json()  
#     # Assertion of body response content:  
#     assert len(data) > 0  
#     assert data["element_count"] > 0


def make_request(val):
    # response = requests.get(f'{base_url}?api_key={api_key}')
    response = requests.get(f'{base_url}/time/secondsToMinutes?seconds={val}')
    print(response.json())

    return response.json()



# from utils.utils import *

class APITest(unittest.TestCase):

   
    def setUp(self):
 
        print("SETUP called ...");
        # Arrange 

        self.num1 : int = 60;
        self.num2 : int = 2;
        self.num3 : int = 5;
        self.num4 : int = -3;


     
    def tearDown(self) :
        print("TEARDOWN called ...");

        self.num1 = 60.0;
        self.num2 = 0;
        self.num3 = 0;
        self.num4 = 0;


     

    def test_seconds_to_minutes(self):
        #Act
        result = make_request(self.num1)
        print("print statement",result)
        #Assert
        self.assertEqual(result, 1.0)
'''
    def test_correct_fibonacci(self):
        #Act
        result = fibonacci(self.num3)
        #Assert
        self.assertEqual(result, 3)
    
    def test_is_valid_input(self):
        #Act
        result = is_valid_input(self.num4)
        #Assert
        self.assertFalse(result);    

'''



if __name__ == "__main__":
    unittest.main()