#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing node servers"

pm2 stop index || echo "Service stopped"

pm2 stop index && echo "service not stopped"

exit