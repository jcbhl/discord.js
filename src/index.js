const Discord = require("discord.js");
const prefix = "!";
const bot = new Discord.Client();
//TODO: Either rewrite git history or regenerate this token. Store in environment variable in the future?
const token = "Nzk1ODQ2NTI3NTU3Njk3NTQ2.X_PT1g.rCPnaDjh-LG4tejUobq4keSUb6g"

bot.on("ready", () =>{
    console.log("Bot is ready");
})
bot.on('message', async (msg) => {
    if(!msg.content.startsWith(prefix)){
        console.log('Message from ' + msg.author + ' at timestamp ' + msg.createdTimestamp + ' did not have prefix');
        return;
    }else{
        console.log('Recieved command ' + msg.content.trim());
    }
})


bot.login(token);