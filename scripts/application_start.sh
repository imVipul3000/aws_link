#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/vipulblog/blog

cd /home/vipulblog/blog

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

#start our node app in the background
pm2 start src/nodejs
exit