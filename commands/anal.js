const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {

	name: "anal",
	async execute(message, args, bot) {

		if (!message.channel.nsfw) {

			let stopembed = new Discord.RichEmbed()
			.setTitle("Canal NSFW não encontrado")
			.setDescription("Faz este comando num sitio apropriado")
			.setColor("#800808")
			.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

            return message.channel.send({embed: stopembed});
        }

		let {body} = await superagent
		.get(`https://nekos.life//api/v2/img/anal`)

		let embed = new Discord.RichEmbed()
		.setTitle("anal")
		.setColor("#800808")
		.setImage(`${body.url}`)
		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

		message.channel.send({embed: embed});

	}

}