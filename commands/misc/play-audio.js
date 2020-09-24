const Commando = require('discord.js-commando');

module.exports = class PlayAudioCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'play',
			group: 'misc',
			memberName: 'play',
			description: 'manda uma mensagem personalizada',
		});
	}
	async run(message) {
		const { voice } = message.member;

		if(!voice.channelID) {
			console.log('fora de canal de voz');
		}
	}
};