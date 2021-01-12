#!/bin/bash
echo 'Beginning setup for discord.pi...'

#Pull dependenices
echo 'Pulling dependencies...'
apt update
apt upgrade
cd "$(dirname "$0")" || exit
npm install

#Add bot key to .env.example and rename
echo 'Input your Discord bot token.'
read -rp 'Token: ' TOKEN
TOKEN_LENGTH=${#TOKEN}
DESIRED_TOKEN_LENGTH=59

#Check token length
if [ ${TOKEN_LENGTH} -ne ${DESIRED_TOKEN_LENGTH} ]
then
    echo 'Incorrect key length.'
    exit
fi
echo 'Adding key to .env...'
sed "s/replace/${TOKEN}/" .env.example > .env
echo 'Key added.'

#Autostart setup
echo 'Discord.js can autostart for easier headless use, would you like to enable?'
read  -e -r -p "Y/n: " PROMPT_RESULT
if [[ ${PROMPT_RESULT} == [Nn]* ]]
then
    echo 'Autostart not enabled.'
    exit
fi
echo 'Adding to rc.local...'
SOURCE_DIR=$(pwd) 
COMMAND="cd ${SOURCE_DIR} && npm start &"
sed -i "\$i${COMMAND}" /etc/rc.local

echo 'Added to rc.local, restart to test.'