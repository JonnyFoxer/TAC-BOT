const Discord = require('discord.js');
const superagent = require("superagent");

module.exports = {

	name: "slap",
	async execute(message, args, bot) {

		let slapuser = message.guild.member(message.mentions.users.first() ||message.guild.members.get(args[0]));

    	if(!slapuser) {

    		let stopembed = new Discord.RichEmbed()
    		.setTitle("Utilização Do Comando Errada")
    		.setDescription("Por favor mencione outra pessoa para dar slap")
    		.setColor("#800808")
    		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")

    		return message.reply({embed: stopembed});

    	}

    	if(slapuser.id === message.author.id) {

    		let stopembed = new Discord.RichEmbed()
    		.setTitle("Utilização Do Comando Errada")
    		.setDescription("Não podes dar slap a ti mesmo. Tenta dar spank a outra pessoa")
    		.setColor("#800808")
    		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")

    		return message.reply({embed: stopembed});

    	}

		let {body} = await superagent
		.get(`https://nekos.life//api/v2/img/slap`)

		let embed = new Discord.RichEmbed()
        .setTitle(`Slap`)
        .setDescription(`<@${message.author.id}> deu um estalo a <@${slapuser.id}>`)
        .setImage(body.url)
        .setColor('#800808')
        .setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

        message.channel.send({embed: embed});

	}

}