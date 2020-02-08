#! /bin/bash
read string
l1=${#string}
l1=$(($l1-1))
s1=${string:l1:-l1}
echo $s1
