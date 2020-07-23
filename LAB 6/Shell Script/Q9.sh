#! /bin/bash
read -p 'Enter filename: ' file
if [ -s $file ]
then
	echo "file exists"
else
	echo "file doesn't exists"
fi

if [ -r $file ]
then    
        echo "file has read perm"
else
        echo "file doesn't have read perm"
fi

if [ -w $file ]
then
        echo "file has write perm"
else
        echo "file doesn't have write perm"
fi

if [ -x $file ]
then
        echo "file has execute perm"
else
        echo "file doesn't have execute perm"
fi

