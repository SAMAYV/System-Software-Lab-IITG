#! /bin/bash

read user
until [ $user = "Bye" ]
do
	echo $user
	read user
done
