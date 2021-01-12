#!bin/bash
echo 'Beginning setup for discord.pi...'

#Add bot key to .env.example and rename
echo 'Input your Discord bot token.'
read -rp 'Token: ' TOKEN
TOKEN_LENGTH=${#TOKEN}
DESIRED_TOKEN_LENGTH=79

#Check token length
if [ ${TOKEN_LENGTH} -ne ${DESIRED_TOKEN_LENGTH} ]
then
    echo 'Incorrect key length.'
    exit
fi
echo 'Adding key to .env'
sed "s/replace/${TOKEN}/" .env.example > .env
echo 'Key added.'

#Autostart setup
echo 'Discord.js can autostart for easier headless use, would you like to enable?'
read  -e -r -p "Y/n" PROMPT_RESULT
if [[ ${PROMPT_RESULT} == [Nn]* ]]
then
    echo 'Autostart not enabled.'
    exit
fi
cd "$(dirname "$0")/src/" || exit
COMMAND="node ${PWD}/index.js &"
sed "\$i${COMMAND}"/etc/rc.local

echo 'Added to rc.local, restart to test.'