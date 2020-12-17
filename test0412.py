# Import Libraries
from firebase import firebase
import datetime
import time
import serial

# Establish my connection to the Firebase Database
FBConn = firebase.FirebaseApplication('https://semester-exam.firebaseio.com', None)

# Serial Setup
ser = serial.Serial()
ser.baudrate = 115200
ser.port = "COM3"
ser.open()

mostrecentKeyID = 0
mostrecentTimestamp = 0

while True:

    # Post our data dictionary to the database under a branch called 'MyTestData'
    myGetResults = FBConn.get('/cover/', None)
    
     
    # Loop around the returned results from the database until we find the latest timestamp
    for keyID in myGetResults:
        if int(myGetResults[keyID]['Timestamp'] > mostrecentTimestamp):
               mostrecentTimestamp = int(myGetResults[keyID]['Timestamp'])
               mostrecentKeyID = myGetResults[keyID]

               if (mostrecentTimestamp != mostrecentKeyID):
                    microbitdata = str(myGetResults[keyID]['pris'])
            
                    # Check it's contents
                    print (microbitdata)
                                
                                    
                    # Write the temperature over serial using protocol dependant protocol
                    ser.write(microbitdata.encode('UTF-8') + b"\n")
               else:
                        print("nej")
                
    # Get the latest recorded Temperature, convert it to a string and assign to a variable

                
    # Wait 5 seconds
    #time.sleep(5)


    # Post our data dictionary to the database under a branch called 'MyTestData'
    myGetResults1 = FBConn.get('/coverLeft/', None)
     
    # Loop around the returned results from the database until we find the latest timestamp
    for keyID in myGetResults1:
        if int(myGetResults1[keyID]['Timestamp'] > mostrecentTimestamp):
               mostrecentTimestamp = int(myGetResults1[keyID]['Timestamp'])
               mostrecentKeyID = myGetResults1[keyID]

               if (mostrecentTimestamp != mostrecentKeyID):
                    microbitdata = str(myGetResults1[keyID]['pris'])
            
                    # Check it's contents
                    print (microbitdata)
                                
                                    
                    # Write the temperature over serial using protocol dependant protocol
                    ser.write(microbitdata.encode('UTF-8') + b"\n")
               else:
                        print("nej")
                
    # Get the latest recorded Temperature, convert it to a string and assign to a variable

                
    # Wait 5 seconds
    #time.sleep(5)
# Close the serial connection
ser.close()