#!/usr/bin/env python3
def anagrams(s1,s2):
	s3 = list(s1)
	s4 = list(s2)
	s3 = sorted(s3)
	s4 = sorted(s4)
	c=0
	for i in range(0,len(s1),1):
		if(s3[i]!=s4[i]):
			c=1
			break
		else:
			continue
	if(c==1):
		return False
	else:
		return True

anagrams(input(),input())
