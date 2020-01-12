const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {

	name: "spank",
	async execute(message, args, bot) {

		let spankuser = message.guild.member(message.mentions.users.first() ||message.guild.members.get(args[0]));
    	if(!spankuser) {

    		let stopembed = new Discord.RichEmbed()
    		.setTitle("Utilização Do Comando Errada")
    		.setDescription("Por favor mencione outra pessoa para dar spank")
    		.setColor("#800808")
    		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")

    		return message.reply({embed: stopembed});

    	}

    	if(spankuser.id === message.author.id) {

    		let stopembed = new Discord.RichEmbed()
    		.setTitle("Utilização Do Comando Errada")
    		.setDescription("Não podes dar spank a ti mesmo. Tenta dar spank a outra pessoa")
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
		.get(`https://nekos.life//api/v2/img/spank`)

		let embed = new Discord.RichEmbed()
		.setTitle("Spank")
		.setDescription(`<@${message.author.id}> spanked <@${spankuser.id}>`)
		.setColor("#800808")
		.setImage(`${body.url}`)
		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

		message.channel.send({embed: embed});

	}

}