#! /bin/bash
read -a array
average=0
counter=${#array[@]}
for ((i=0;i<counter;i++))
do
	average=`expr $average + ${array[i]}`	
done
average=`expr $average / $counter`
echo "average = $average"
printf 'average = %0.3f' "$average"
echo
