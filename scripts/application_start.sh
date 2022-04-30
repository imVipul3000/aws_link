#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/vipulblog/blog

#navigate into our working directory where we have all our github files
cd /home/vipulblog/blog

#start our node app in the background
node scr/index.js > app.out.log 2> app.err.log < /dev/null & 