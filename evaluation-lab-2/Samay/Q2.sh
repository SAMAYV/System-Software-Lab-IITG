#! /bin/bash
flag=1
while [ $flag -eq 1 ]
do
	read password
	uc=0
	words=0
	lc=0
	digits=0	
	for((i=0; i < ${#password}; i++))
	do
		case ${password:i:1} in
				[a-z] ) 
					lc= $((lc + 1)) ;;
				[A-Z] )
					uc= $((uc + 1)) ;;
				[1-9] )
					digits= $((digits + 1));;
				* )
					;;
		esac
	done
	words=$((uc + lc + digits)) 	
	if [ ! \( $words -ge 8 \) -a \( $uc -ge 1 \) -a \( $lc -ge 1 \) -a \( $digits -ge 1 \) ]
	then
		echo "weaker password"
		echo "enter again"
		flag=1
	else
		flag=0
	fi
done
