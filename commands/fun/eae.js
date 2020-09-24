const commando = require('discord.js-commando');

module.exports = class EaeCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'eae',
			group: 'fun',
			memberName: 'eae',
			description: 'te cumprimenta como um bom main Zac',
			hidden: true,
		});
	}
	async run() {
		commando.CommandoMessage.channel.send('Eae beleza?');
	}
};