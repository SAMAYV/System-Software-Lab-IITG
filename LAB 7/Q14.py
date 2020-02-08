#!/usr/bin/env python3
l = input().split(" ")
f1 = open(l[2],"r")
f2 = open(l[3],"w")
l1 = f1.readlines()
for i in l1:
	l3 = i.split(" ")
	for j in l3:
		j = j.strip("\n")
		if j == l[0]:
			f2.write(l[1])
		if j != l[0]:
			f2.write(j)
		f2.write(" ")
	f2.write("\n")

