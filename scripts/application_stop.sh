#!/bin/bash

cd /home/vipulblog/blog

echo "stopping pm2 service"
echo "user is : "
whoami
echo "username above : "
pm2 stop index || ls -lrt
echo "pm2 service stopped...."