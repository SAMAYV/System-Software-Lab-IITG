#!/usr/bin/env python3
def my_reverse(s):
	a=s[::-1]
	return a

def reverse(s):
	a=""
	for value in s:
		a=value+a
	return a

print(my_reverse(input()))
print(reverse(input()))
