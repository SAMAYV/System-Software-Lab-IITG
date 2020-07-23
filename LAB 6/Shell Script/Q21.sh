#! /bin/bash

read -a a
read -a b
k=0
c=()
:<<'END'
for((i=0;i<3;i++))
do
	for((j=0;j<3;j++))
	do
		v=$((i*3 + j))
		c[k] = `expr ${a[v]} + ${b[v]}`
		echo "${c[v]}  "
		k=$((k+1))
	done
	echo
done	
END

matrix3=()
for((i=0; i<3; i++))
do
  for((j=0; j<3; j++))
  do
    index=$((i*3 + j))
    matrix3[k]=$((${matrix1[index]} + ${matrix2[index]}))
    k=$((k + 1))
  done
done
