#!/bin/bash

content=$(<automatic.flag)

if [ $content -eq 1 ]
  phone=$( hcitool name 04:DB:56:2C:EC:36 )
  if [ $phone -eq 1 ]
    gpio -g mode 23 out
    gpio -g mode 23 out
    echo 0 > automatic.flag
  fi
fi