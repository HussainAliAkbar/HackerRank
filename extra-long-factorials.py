#-------------------------------------------------------
#Problem Statement:
#https://www.hackerrank.com/challenges/extra-long-factorials/problem
#-------------------------------------------------------

#Language: Python 3

#Instructions to run:
# 1. save the sample input/any input that you want to test in a file named anything e.g. file.txt
# 2. run in terminal: python extra-long-factorials.py < file.txt

#!/bin/python3

import sys

def extraLongFactorials(n):
  total = 1
  while n != 1:
      total = total * n
      n = n - 1
  print(total)   

if __name__ == "__main__":
  n = int(input().strip())
  extraLongFactorials(n)