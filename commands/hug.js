const Discord = require('discord.js');
const superagent = require("superagent");

module.exports = {

	name: "hug",
	async execute(message, args, bot) {

		let huguser = message.guild.member(message.mentions.users.first() ||message.guild.members.get(args[0]));

    	if(!huguser) {

    		let stopembed = new Discord.RichEmbed()
    		.setTitle("Utilização Do Comando Errada")
    		.setDescription("Por favor mencione outra pessoa para dar hug")
    		.setColor("#800808")
    		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")

    		return message.reply({embed: stopembed});

    	}

    	if(huguser.id === message.author.id) {

    		let stopembed = new Discord.RichEmbed()
    		.setTitle("Utilização Do Comando Errada")
    		.setDescription("Não podes dar hug a ti mesmo. Tenta dar spank a outra pessoa")
    		.setColor("#800808")
    		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")

    		return message.reply({embed: stopembed});

    	}

		let {body} = await superagent
		.get(`https://nekos.life//api/v2/img/hug`)

		let embed = new Discord.RichEmbed()
        .setTitle(`Hug`)
        .setDescription(`<@${message.author.id}> abraçou <@${huguser.id}>`)
        .setImage(body.url)
        .setColor('#800808')
        .setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

        message.channel.send({embed: embed});

	}

}