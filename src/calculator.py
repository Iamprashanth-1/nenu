from functions import *

print("what do you want to do?")
print("1 addition")
print("2 subtraction")
print("3 muliplication")
print("4 division")

choice = input("Enter the number : ")

num1 = int(input("enter the number 1 : "))
num2 = int(input("enter the number 2 : "))

if choice == '1':
    addition(num1,num2)
elif choice == '2':
    subtraction(num1,num2)
elif choice == '3': 
    multiplication(num1,num2)
elif choice == '4':
    division(num1,num2)
else:
    print("invalid input")
    

 