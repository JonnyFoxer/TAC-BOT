const Discord = require('discord.js');
const superagent = require("superagent");

module.exports = {

	name: "pat",
	async execute(message, args, bot) {

		let patuser = message.guild.member(message.mentions.users.first() ||message.guild.members.get(args[0]));

    	if(!patuser) {

    		let stopembed = new Discord.RichEmbed()
    		.setTitle("Utilização Do Comando Errada")
    		.setDescription("Por favor mencione outra pessoa para dar pat")
    		.setColor("#800808")
    		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")

    		return message.reply({embed: stopembed});

    	}

    	if(patuser.id === message.author.id) {

    		let stopembed = new Discord.RichEmbed()
    		.setTitle("Utilização Do Comando Errada")
    		.setDescription("Não podes dar pat a ti mesmo. Tenta dar spank a outra pessoa")
    		.setColor("#800808")
    		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")

    		return message.reply({embed: stopembed});

    	}

		let {body} = await superagent
		.get(`https://nekos.life//api/v2/img/pat`)

		let embed = new Discord.RichEmbed()
        .setTitle(`Pat`)
        .setDescription(`<@${message.author.id}> deu uma festinha a <@${patuser.id}>`)
        .setImage(body.url)
        .setColor('#800808')
        .setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

        message.channel.send({embed: embed});

	}

}