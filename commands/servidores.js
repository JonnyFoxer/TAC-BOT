const Discord = require("discord.js");

module.exports = {

	name: "servidores",
	execute(message, args, bot) {

		let embed = new Discord.RichEmbed()
		.setTitle("**TAC - SERVIDORES DE JOGO**")
		.setDescription("A Tuga Army dispõe dos seguintes servidores")
		.setColor("#800808")
		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")
		.addField("**TAC | AWP**", "185.219.128.96:28015")
		.addField("**TAC | COMPETITIVO**", "185.219.128.96:28005")
		.addField("**TAC | RETAKES**", "185.219.128.96:28020")
		.addField("⠀⠀⠀", "Junta-te a nós e traz os teus amigos");

		message.channel.send({embed: embed});

	}

}