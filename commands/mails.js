const Discord = require('discord.js');

module.exports = {

	name: "mails",
	async execute(message, args, bot) {

		let embed = new Discord.RichEmbed()
        .setTitle(`**MAILS DA TUGA ARMY**`)
        .setDescription("Aqui vem os nossos e-mails caso nos quer contactar para receber ajuda e muito mais:")
        .setColor('#800808')
        .setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")
        .addField("**GERAL:**", "geral@tugaarmy.pt")
        .addField("**PARCERIAS:**", "parcerias@tugaarmy.pt")
        .addField("**TEAMS:**", "teams@tugaarmy.pt")
        .addField("**CANDIDATURAS:**", "candidaturas@tugaarmy.pt");

        message.channel.send({embed: embed});

	}

}