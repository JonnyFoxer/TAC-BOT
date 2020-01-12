const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const randomPuppy = require('random-puppy');
const superagent = require("superagent");

let allCommands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
bot.cmdData = new Discord.Collection()
for (const cmd of allCommands) {
  let commandfile = require(`./commands/${cmd}`)

  bot.cmdData.set(commandfile.name, commandfile); 
}

bot.on("ready", () => {

	console.log("[ON] O Bot está on");

});

bot.on("message", async message => {

	if(message.author.bot) return;

	let prefix = "tac"

	if (!message.content.startsWith(prefix)) return;
	let messageArray = message.content.split(" ");
	let cmdName = messageArray[0];
	let args = messageArray.slice(1);
  	let searchCmd = cmdName.replace(prefix, "");

  	let cmdObject = bot.cmdData.get(searchCmd)
	if (!cmdObject) return console.log("[ERROR] Comando Não Encontrado");

	cmdObject.execute(message, args, bot);

});

bot.on("ready", () => {
  bot.user.setActivity(`tugaarmy.pt | tachelp`, {type:"WATCHING"});
});

bot.login("NjY1NTk5MzY3ODk3NDE1Njkw.Xhn-Gg.1ICMHfN1v9Cv8Babl19hyWEIPbA");