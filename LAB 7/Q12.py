#!/usr/bin/env python3
from random import sample
f = open("words.txt","r")
w = open("new.txt","w")
s = f.read()
a = s.split("\n")
l = sample(a,200)
l.sort()
l.sort( key = len )
for i in l:
	w.write(i)
	w.write("\n")
