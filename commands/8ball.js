const Discord = require("discord.js");

module.exports = {

	name: "8ball",
	async execute(message, args, bot) {

		if(!args[2]) {

			let stopembed = new Discord.RichEmbed()
			.setTitle("Utilização do comando errada")
			.setDescription("Por favor insere uma pergunta")
			.setColor("#800808")
			.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

			return message.reply({embed: stopembed});

		}
    	let replies = ["Provavelmente", "Talvez", "Não sei", "Óbvio", "Sim", "Not Found", "Erro...", "Eu não posso responder agora. Volte mais tarde", "Não"];
    	let result = Math.floor((Math.random() * replies.length));
    	let question = args.join(" ");

    	let embed = new Discord.RichEmbed()
    	.setColor("#800808")
    	.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")
    	.addField("Questão", question)
    	.addField("Resposta", replies[result]);
    
    	message.channel.send({embed: embed});

	}

}
