const Discord = require("discord.js");

module.exports = {

	name: "sites",
	execute(message, args, bot) {

		let embed = new Discord.RichEmbed()
		.setTitle("**SITES**")
		.setDescription("Aqui estão os nossos sites :)")
		.setColor("#800808")
		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")
		.addField("**SITE OFICIAL**", "https://tugaarmy.pt")
		.addField("**SITE DOS BANIMENTOS**", "https://bans.tugaarmy.pt");

		message.channel.send({embed: embed});

	}

}