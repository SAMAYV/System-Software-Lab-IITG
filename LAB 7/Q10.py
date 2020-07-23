#!/usr/bin/env python3
s = input()
d = {}
d[s] = {}
for i in s:
	if i not in d[s]:
		d[s][i] = 1
	else:
		d[s][i] += 1
print(d)