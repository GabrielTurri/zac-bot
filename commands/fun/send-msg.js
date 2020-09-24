const commando = require('discord.js-commando');

module.exports = class MessageCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'msg',
			group: 'fun',
			memberName: 'msg',
			description: 'manda uma mensagem personalizada',
			hidden: true,
			argsType: 'multiple',
		});
	}
	async run(message, args) {
		message.delete();
		let textMessage = '';
		for (let x = 0; x < args.length; x++) {
			textMessage += args[x];
			textMessage += ' ';
		}
		message.say(textMessage);

	}
};