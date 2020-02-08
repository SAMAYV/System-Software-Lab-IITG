#! /bin/bash
read ch
case $ch in
	[a-z] )
		echo "lowercase" ;;
	[A-Z] )
		echo "uppercase" ;;
	[0-9] )
		echo "digit" ;;
	* )
		echo "unknown input" ;;
esac

