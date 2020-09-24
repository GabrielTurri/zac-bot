// require the discord.js-Commando module
const Commando = require('discord.js-commando');
const path = require('path');
// const sqlite = require('sqlite');
const config = require(path.join(__dirname, 'config', 'config.json'));
// const search = require('youtube-search');

// create a new Discord and Commando client
const client = new Commando.Client({
	owner: '270249938003296258',
	commandPrefix: config.prefix,
});

client.registry
// Registers your custom command groups
	.registerGroups([
		['fun', 'fun commands'],
		['help', 'help commands'],
		['misc', 'misc commands'],
		['mod', 'mod commands'],
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
client.on('message', async message => {
	if (message.content === 'eae' | 'Eae') {
		// send back "Eae beleza?" to the channel the message was sent in
		message.channel.send('Eae beleza?');
	}
});

