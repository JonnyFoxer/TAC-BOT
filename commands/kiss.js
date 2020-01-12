const Discord = require('discord.js');
const superagent = require("superagent");

module.exports = {

	name: "kiss",
	async execute(message, args, bot) {

		let kissuser = message.guild.member(message.mentions.users.first() ||message.guild.members.get(args[0]));

    	if(!kissuser) {

    		let stopembed = new Discord.RichEmbed()
    		.setTitle("Utilização Do Comando Errada")
    		.setDescription("Por favor mencione outra pessoa para dar kiss")
    		.setColor("#800808")
    		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")

    		return message.reply({embed: stopembed});

    	}

    	if(kissuser.id === message.author.id) {

    		let stopembed = new Discord.RichEmbed()
    		.setTitle("Utilização Do Comando Errada")
    		.setDescription("Não podes dar kiss a ti mesmo. Tenta dar spank a outra pessoa")
    		.setColor("#800808")
    		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")

    		return message.reply({embed: stopembed});

    	}

		let {body} = await superagent
		.get(`https://nekos.life//api/v2/img/kiss`)

		let embed = new Discord.RichEmbed()
        .setTitle(`Kiss`)
        .setDescription(`<@${message.author.id}> beijou <@${kissuser.id}>`)
        .setImage(body.url)
        .setColor('#800808')
        .setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

        message.channel.send({embed: embed});

	}

}