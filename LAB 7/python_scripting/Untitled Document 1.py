#!/usr/bin/env python3
f = open("words.txt","r")
a = f.readlines()
for i in range(len(a)):
	a[i] = a[i].strip()
print(a)
