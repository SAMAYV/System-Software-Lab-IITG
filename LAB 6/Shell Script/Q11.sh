#! /bin/bash
read val
printf '%0.4f' "`echo "$val^5" | bc -l`"
echo
echo "scale=4 ; $val ^ 5" | bc -l

