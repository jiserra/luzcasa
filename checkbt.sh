#!/bin/bash

content=$(<manual.flag)

while :
do
  if [ $content -eq 1 ]
  then
    ./setcron.sh
    echo 0 > manual.flag
    break
  fi
  phone=$( hcitool name 04:DB:56:2C:EC:36 )
  if [ "$phone" ]
  then
    gpio -g mode 23 out
    gpio -g write 23 0
    ./setcron.sh
    break
  fi
  sleep 5
done