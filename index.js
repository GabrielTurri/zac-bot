// require the discord.js module
const Discord = require('discord.js');
// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Let\'s Bounce!');
});

// token
client.login('your-token-here');

// test command
client.on('message', message => {
	if (message.content === '!z ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	}
	if (message.content === 'eae' | 'Eae') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Eae beleza?');
	}
});

