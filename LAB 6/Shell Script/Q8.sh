#! /bin/bash
read n
if [ $n -lt 0 ]
then
	echo "less than zero"
elif [ $n -eq 0 ]
then
	echo "equal to zero"
else
	echo "more than zero"
fi

