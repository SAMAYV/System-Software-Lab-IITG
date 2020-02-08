#! /bin/bash

read file1 file2  #reads files by space

if [ -s $file1 -a -s $file2 ]
then
	echo "Both Exists"
elif [ -s $file1 -o -s $file2 ]
then
	echo "one exists"
fi

