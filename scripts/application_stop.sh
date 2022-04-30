#!/bin/bash

cd /home/vipulblog/blog

echo "stopping pm2 service"
pm2 stop index 
echo "pm2 service stopped...."