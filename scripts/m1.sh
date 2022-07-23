#!/bin/bash

MOS=JAK
MOS2=`uname -a`

echo "Message script"
echo "Let's show files in this folder ${MOS2}"
ls
sh &
ls -l
echo "Done"