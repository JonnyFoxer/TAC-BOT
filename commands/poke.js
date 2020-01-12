const Discord = require('discord.js');
const superagent = require("superagent");

module.exports = {

	name: "poke",
	async execute(message, args, bot) {

		let patuser = message.guild.member(message.mentions.users.first() ||message.guild.members.get(args[0]));

    	if(!patuser) {

    		let stopembed = new Discord.RichEmbed()
    		.setTitle("Utilização Do Comando Errada")
    		.setDescription("Por favor mencione outra pessoa para dar poke")
    		.setColor("#800808")
    		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")

    		return message.reply({embed: stopembed});

    	}

    	if(patuser.id === message.author.id) {

    		let stopembed = new Discord.RichEmbed()
    		.setTitle("Utilização Do Comando Errada")
    		.setDescription("Não podes dar poke a ti mesmo. Tenta dar spank a outra pessoa")
    		.setColor("#800808")
    		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")

    		return message.reply({embed: stopembed});

    	}

        if (!message.channel.nsfw) {

            let stopembed = new Discord.RichEmbed()
            .setTitle("Canal NSFW não encontrado")
            .setDescription("Faz este comando num sitio apropriado")
            .setColor("#800808")
            .setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

            return message.channel.send({embed: stopembed});
        }

		let {body} = await superagent
		.get(`https://nekos.life//api/v2/img/poke`)

		let embed = new Discord.RichEmbed()
        .setTitle(`Poke`)
        .setDescription(`<@${message.author.id}> tocou no(a) <@${patuser.id}>`)
        .setImage(body.url)
        .setColor('#800808')
        .setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

        message.channel.send({embed: embed});

	}

}