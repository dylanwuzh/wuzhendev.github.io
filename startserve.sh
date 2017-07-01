#!/bin/sh
#lsof -i tcp:4000 | awk -F ' ' '{print $2}' > pid.txt
#for line in `cat pid.txt`
#do
#    if [ $line != "PID" ]; then
#        echo "kill -9 $line"
#        kill -9 $line
#    fi
#done
#rm -f pid.txt

lsof -i tcp:4000 |grep -v "^COMMAND"|awk '{print "kill -9 " $2 }'|sh
bundle exec jekyll serve
