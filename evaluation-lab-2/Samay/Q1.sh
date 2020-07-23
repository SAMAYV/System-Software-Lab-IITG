#! /bin/bash
x=4
function print(){
	#local x=$5
	echo $-
	echo $$
	echo $? 
}
quit () {
exit 11
}

print Hello World
print world
echo $x
quit
