const Discord = require("discord.js");
const fs = require("fs");

module.exports = {

	name: "warn",
	async execute(message, args, bot) {

		let warns = JSON.parse(fs.readFileSync("./warnings.json"));

		if(!message.member.hasPermission("MANAGE_MESSAGES")) {

			let stopembed = new Discord.RichEmbed()
			.setTitle("Permissão Insuficiente")
			.setDescription("Falta-te a permissão ``GERECIAMENTO_DE_MENSAGENS`` para conseguires fazeres este comando.")
			.setColor("#800808")
			.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

			return message.reply({embed: stopembed});

		}

		let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
		if(!wUser) {

			let stopembed = new Discord.RichEmbed()
			.setTitle("Utilização do comando errada")
			.setDescription("Não foi encontrado uma pessoa para dar warn. Menciona uma pessoa para dar warn")
			.setColor("#800808")
			.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

			return message.reply({embed: stopembed});

		}

		if(wUser.id === message.author.id) {

			let stopembed = new Discord.RichEmbed()
			.setTitle("Utilização do comando errada")
			.setDescription("Não podes dar warn a ti mesmo")
			.setColor("#800808")
			.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

			return message.reply({embed: stopembed});

		}

		if(wUser.id === "665599367897415690") {

			let stopembed = new Discord.RichEmbed()
			.setTitle("Utilização do comando errada")
			.setDescription("Não podes dar warn a mim. Por favor não tentes na próxima vez")
			.setColor("#800808")
			.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

			return message.reply({embed: stopembed});

		}

		if(wUser.hasPermission("MANAGE_MESSAGES")) {

			let stopembed = new Discord.RichEmbed()
			.setTitle("Utilização do comando errada")
			.setDescription("Não podes dar warn a uma pessoa que tem a permissão ``GERECIAMENTO_DE_MENSAGENS``")
			.setColor("#800808")
			.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

			return message.reply({embed: stopembed});

		}

		let reason = args.join(" ").slice(22);
		if(!reason) {

			let stopembed = new Discord.RichEmbed()
			.setTitle("Utilização do comando errada")
			.setDescription("Por favor insere uma razão")
			.setColor("#800808")
			.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer");

			return message.reply({embed: stopembed});

		}

		if(!warns[wUser.id]) warns[wUser.id] = {
			warns: 0
		};

		warns[wUser.id].warns++;

		fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
			if (err) console.log(err)
		});


		let warnEmbed = new Discord.RichEmbed()
		.setTitle("**AVISO**")
		.setThumbnail(wUser.avatarURL)
		.setColor("#800808")
		.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")
		.addField("Pessoa avisada", `<@${wUser.id}>`)
		.addField("Avisado por", `<@${message.author.id}>`)
		.addField("Avisado no canal", message.channel)
		.addField("Número de avisos", warns[wUser.id].warns)
		.addField("Razão", reason);

		let warnChannel = message.guild.channels.find("name", "🔔avisos_logs");
		if(!warnChannel) return message.channel.send("Can't find channel with the name logs");

		warnChannel.send(warnEmbed);

	}

}