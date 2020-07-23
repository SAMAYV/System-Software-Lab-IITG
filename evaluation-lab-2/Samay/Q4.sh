#! /bin/bash
read n
k=1
for((i=0; i<n; i++))
do
	for((j=n-1; j>i; j--))
	do
		echo -n "  "
	done
	q=$((i+1))
	d=i
	for((k=i; k>0; k--))
	do
		echo -n $((d + 1))
		echo -n " "
		d=$((d + 1))
	done

	l=$((i*2 + 1))
	echo -n $l
	echo -n " "
	
	for((m=l; m>q; m--))
	do
		echo -n $((m - 1))
		echo -n " "
	done
	echo
done
	
