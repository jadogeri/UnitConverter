import unittest
import sys
import pytest
from pytest_mock import MockFixture

from os.path import dirname, abspath
dir = dirname(dirname(abspath(__file__)))
print("path ===",dir)

dir_models = dir +'\\models'
print(dir_models)

dir_tests = dir +'\\tests';


sys.path.append(dir_models)
sys.path.append(dir_tests)

# from utils.utils import *


from Cooking import *
from Temperature import *
from Time import *
from Geometry import *



class APITest(unittest.TestCase):

   
    def setUp(self):
 
        print("SETUP called ...");
        # Arrange 

        self.num1 : int = 1;
        self.num2 : int = 2;
        self.num3 : int = 5;
        self.num4 : int = -3;


     
    def tearDown(self) :
        print("TEARDOWN called ...");

        self.num1 = "1";
        self.num2 = 0;
        self.num3 = 0;
        self.num4 = 0;


       
    def test_base_case_1(self):
        #Act
        result = minutesToSeconds(self.num1)
        print("print statement ",result)
        #Assert
        self.assertEqual(result,60.0)
'''
    def test_base_case_2(self):
        #Act
        result = fibonacci(self.num2)
        #Assert
        self.assertEqual(result, 1)

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