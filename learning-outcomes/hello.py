# This program says hello and asks for my name

print('Hello world!')
print('What is your name?') # ask for their name
myName = input()
print('It is nice to meet you, ' + myName)
print('The length of your name is:')
print('Your name is ' + str(len(myName)) + ' letters long.')

print('What is your age?') # ask for their age
myAge = input()
print('You will be ' + str(int(myAge) + 1) + ' in a year.')

print('Do you want to know how old you will be in 2121?')
print((int(str(myAge))) + 1000)
