#! /usr/bin/env python3
def read_and_parse(filename):
	a = filename
	d = open(a,"r")
	arr = list()
	for i in d:
		arr1 = i.split(" ") 
		for j in range(len(arr1)):
			arr1[j] = arr1[j].strip(" ")
			arr1[j] = arr1[j].strip("\n")
			arr1[j] = arr1[j].strip("!")
			arr1[j] = arr1[j].lower()
			arr = arr + arr1[j].split(" ")
	f = open("new.txt","w")
	for i in arr:
		f.write(i)
		f.write("\n")
	return arr

print(read_and_parse(input()))

