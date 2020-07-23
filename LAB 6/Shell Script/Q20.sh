#! /bin/bash

read filename

function word(){
	echo "No of words :" 
	wc -w $filename | cut -d" " -f1
	echo "No of lines :" 
	wc -l $filename | cut -d" " -f1
	echo "No of characters :" 
	wc -c $filename | cut -d" " -f1
}

word
