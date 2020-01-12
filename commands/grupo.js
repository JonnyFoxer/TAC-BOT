module.exports = {
	name: "grupo",
	execute(message, args, bot) {

		let Discord = require("discord.js");

		let embed = new Discord.RichEmbed()
		.setTitle("**GRUPO STEAM**")
		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")
		.setColor("#800808")
		.addField("Aqui está o nosso grupo steam (Agora não perguntes ;) ):", "https://steamcommunity.com/groups/tugaarmycm");

		message.channel.send({embed: embed});

	}
}