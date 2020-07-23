#! /bin/bash

STRING="this is a string"
SUBSTRING="hat"
echo `expr index "$STRING" "$SUBSTRING"`
