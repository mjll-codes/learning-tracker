#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Apr 21 07:13:36 2021

@author: madisonjliddell
"""

# This program says hello and asks my name


print("Hello, what is your name?")
myName = input()

print("Hello", myName, "!")
print("The length of your name is: ")
print(len(myName))

print("What is your age?")
myAge = input()

print("You will be", str(int(myAge) +1), "next year!")
