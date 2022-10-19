const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('refresh')
        .setDescription("Refreshes commands!"),
	async execute(interaction) {
		const { refresh, commands } = require('../deploy-commands.js');
		const s = {
			start: "Refreshing commands...",
			done: "Refreshed " + commands.length + " commands!"
		}
		console.log(s.start);
		await interaction.reply(s.start);
        await refresh();
		console.log(s.done)
        await interaction.channel.send(s.done);
	},
};