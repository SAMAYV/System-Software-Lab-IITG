#! /bin/bash
read -a arr
case "${arr[2]}" in
	"+" ) 
		echo `expr ${arr[0]} + ${arr[1]}` ;;
	"-" ) 
		echo `expr ${arr[0]} - ${arr[1]}` ;;
	"*" ) 
		echo `expr ${arr[0]} \* ${arr[1]}` ;;
	"/" ) 
		echo `expr ${arr[0]} / ${arr[1]}` ;;
	"*" )
		echo "unknown"
esac


