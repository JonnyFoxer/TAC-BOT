const Discord = require('discord.js');

module.exports = {

	name: "clear",
	async execute(message, args, bot) {

		if(!message.member.hasPermission("MANAGE_MESSAGES")) {

			let stopembed = new Discord.RichEmbed()
			.setTitle("Permissão Insuficiente")
			.setDescription("Falta-te a permissão ``GERECIAMENTO_DE_MENSAGENS`` para conseguires fazeres este comando.")
			.setColor("#800808")
			.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

			return message.reply({embed: stopembed});


		}
		if(!args[0]) {

			let stopembed = new Discord.RichEmbed()
			.setTitle("Utilização Do Comando Errada")
			.setDescription("Precisas de inserir quantas mensagens queres eliminar para eliminar")
			.setColor("#800808")
			.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

			return message.reply({embed: stopembed});

		}

		message.channel.bulkDelete(args[0]).then(() => {

      		let Discord = require('discord.js')
			let clearembed = new Discord.MessageEmbed()
			.setColor("#800808")
			.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")
			.addField("Messages Deleted", `You have deleted ${args[0]} messages`);

			message.channel.send(clearembed).then(msg => msg.delete(5000));

		});

	}

}