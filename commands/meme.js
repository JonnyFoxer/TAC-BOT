const randomPuppy = require('random-puppy');
const Discord = require("discord.js");
const subreddits = [
    "memes",
    "DeepFriedMemes",
    "bonehurtingjuice",
    "surrealmemes",
    "dankmemes",
    "meirl",
    "me_irl",
    "funny"
]

module.exports = {

	name: "meme",
	execute(message, args, bot) {

		var randSubreddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

		randomPuppy(randSubreddit)
		.then(url => {

			let embed = new Discord.RichEmbed()
			.setTitle("Meme")
			.setFooter("TUGA ARMY BOT | Criado Por JonnyFoxer")
			.setDescription(`[URL Da Imagem](${url})`)
			.setImage(url)
			.setColor("#800808");

			message.channel.send({embed: embed});

		})

	}

}