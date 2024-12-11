
print("start api tests.......................................................");
from TimeTest import *

print("end api tests .......................................................");

'''
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