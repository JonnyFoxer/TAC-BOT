const Discord = require("discord.js");

module.exports = {

	name: "help",
	execute(message, args, bot) {

		let embed = new Discord.RichEmbed()
		.setTitle("**HELP**")
		.setDescription("Se quiseres saber os comandos do bot aqui estão eles")
		.setColor("#800808")
		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")
		.addField("🔗Utilidade", "``tachelp``\n``tacmails``\n``tacservidores``\n``tacsites``\n``tacgrupo``")
		.addField("❌Administração", "``tacclear``\n``tacwarn``")
		.addField("😂Diversão", "``tacslap``\n``tackiss``\n``tachug``\n``tacmeme``\n``tacpat``\n``tacpoke``\n``tac8ball``")
		.addField("🔞NSFW", "``tacanal``\n``tacblowjob``\n``tacboobs``\n``tachentai``\n``tacpussy``\n``tacspank``")
		.addField("⠀⠀⠀", "Agora que sabes os comandos não me chateies ;D");

		message.channel.send({embed: embed});

	}

}