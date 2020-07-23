#! /bin/bash

read -a arr
len=${#arr[@]}
LEN=1
flag=0
if [ $((len % 2)) == 0 ]
then
	for((i=0; i < len/2; i++))
	do
		if [ ${arr:$i:$LEN} != ${arr:$len-1-i:$LEN} ]
		then
			flag=1
			break
		fi
	done
else
	for((i=0; i < (len-1)/2; i++))
	do
		if [ ${arr:$i:$LEN} != ${arr:$len-1-i:$LEN} ]
		then
			flag=1
			break
		fi
	done
fi

if [ $flag == 1 ]
then 
		echo "NO"
else
	echo "YES"
fi
