// require the discord.js-Commando module
const Commando = require('discord.js-commando');
const path = require('path');
// const sqlite = require('sqlite');
const config = require(path.join(__dirname, 'config', 'config.json'));
// create a new Discord and Commando client
const client = new Commando.Client({
	owner: '270249938003296258',
});

client.registry
// Registers your custom command groups
	.registerGroups([
		['fun', 'eae'],
		['help', '!z help'],
	])
// Registers all buit-in groups, commands, and arguments types
	.registerDefaults()

// Registers all of your commands in the ./commands/ directory
	.registerCommandsIn(path.join(__dirname, 'commands'));

// client.setProvider(
// 	sqlite.open(path.join(__dirname, 'settings.sqlite3')).then(db => new Commando.SQLiteProvider(db)),
// ).catch(console.error);


// when the client is ready, run this
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Let\'s Bounce!');
});

// login
client.login(config.token);

// test command
client.on('message', message => {
	if (message.content === '!z ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	}
	if (message.content === 'eae' | 'Eae') {
		// send back "Eae beleza?" to the channel the message was sent in
		message.channel.send('Eae beleza?');
	}
	if (message.content === '!z help') {
		// send back the available commands to the channel the message was sent in
		message.channel.send('Comandos disponíveis: ```\neae \n!z help```');
	}

});

