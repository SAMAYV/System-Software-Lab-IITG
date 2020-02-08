#!/usr/bin/env python3
import os
curr=os.getcwd()
for dirpath, dirnames, filenames in os.walk(curr):
	for dir in dirnames:
		print(dir)

