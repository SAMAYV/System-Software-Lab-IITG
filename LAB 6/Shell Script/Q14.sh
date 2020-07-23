#! /bin/bash
read a
read b
flag=0

until [ $flag -eq 1 ]
do
	if [ $a -gt $b ]
	then
		num=$a
		a=$b		
		b=`expr $num % $b`
	elif [ $b -gt $a ]
	then
		num=$b
		b=$a
		a=`expr $num % $a`
	else
		gcd=$a
		flag=1
	fi


	if [ $a -eq 0 ]
	then
		gcd=$b
		flag=1
	elif [ $b -eq 0 ]
	then
		gcd=$a
		flag=1
	elif [ $a -eq 1 -o $b -eq 1 ]
	then
		gcd=1
		flag=1
	fi
	
done

echo "gcd = $gcd"

