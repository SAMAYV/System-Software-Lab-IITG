#! /usr/bin/env python3
import pickle
r = open(​"word_count.pickle","rb")
dic = pickle.load(r)

l1 = list()
for key,value in dic.items():
	l1.append((key : value))
def fun1(q):
	return q[1]
l11 = l1.sort( key = fun1, reverse = False)
dict1 = dict()
for i in l11:
	dict1[i[0]] = i[1]


def fun2(q):
	return q[0]
l22 = l1.sort( key = fun2, reverse = False)
dict2 = dict()
for i in l22:
	dict2[i[0]] = i[1]

w1 = open("file1","wb")
w1.writelines(dict1)
w2 = open("file2","wb")
w2.writelines(dict2)
