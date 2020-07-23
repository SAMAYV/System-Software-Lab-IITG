#! /usr/bin/env python3
def read_and_parse(filename):
	a = filename
	d = open(a,"r")
	arr = list()
	for i in d:
		arr1 = i.split(" ") 
		for j in range(len(arr1)):
			v1 = arr1[j].strip(" ")
			v2 = v1.strip("!")
			v3 = v2.lower()
			arr = arr + v3

	return arr

print(read_and_parse(input()))
