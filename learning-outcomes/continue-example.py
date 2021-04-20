#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Apr 21 08:33:06 2021

@author: madisonjliddell
"""

spam = 0
while spam < 140:
    spam = spam + 1
    if spam == 3:
        continue
    print('Spam is ' + str(spam))