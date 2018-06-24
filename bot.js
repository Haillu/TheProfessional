const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDU5MjgyODEzNDI3MTIyMTg2.DhByYw.D76bIOGh8yS5gMCVFUS-52ipVq4);
