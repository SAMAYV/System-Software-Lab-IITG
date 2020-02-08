#! /usr/bin/env python3
import pickle
def statistical_analysis(word_list):
	dic = {}
	​for i in word_list:
		if(i not in dic):
			dic[i] = 1
		else:
			dic[i] += 1
	t = open("word_count.pickle","wb")	
	pickle.dump(dic,t)
	sum = 0
	unique = 0
	for key,value in dic.items():
		unique += 1
		sum += value
	mean = sum/unique
	
			 
		

