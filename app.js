

// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();
const token = process.env.token;

// Here we load the config.json file that contains our token and our prefix values.
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.
const PREFIX = "=" // bot's prefix


var SourceQuery = require('sourcequery');



var eightball = [ // sets the answers to an eightball
  ":8ball: | Yes!",
  ":8ball: | No.",
  ":8ball: | Maybe.",
  ":8ball: | Probably!",
  ":8ball: | I don't think so.",
  ":8ball: | Maybe.",
]




const fs = require('fs');

const activities_list = [
    "with Arbiter | =help",
    "with Unggoys | =help",
    "with Kamuji | =help",
    "with Striker | =help"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
	  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: "STREAMING", url: "https://www.twitch.tv/somethingluulop"}); // sets bot's activities to one of the phrases in the arraylist.
    }, 5000); // Runs this every 10 seconds.
});



client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Let's go with a few common example commands! Feel free to delete or change those.

  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
  }
  





  if(command === "info") {
    let myembed = new Discord.RichEmbed()
    .setTitle('Information!')
    .setAuthor("SoS AI", "https://imgur.com/OZrgWQH.jpg")
    .setColor('RANDOM')
    .setDescription('This is information about the AI and the Discord Server!')
    .addField(":robot: __SoS AI:__", 'In order to see the commands avaliable, type `=help`! ', true)
    .addField(':dog: __Discord Server:__', 'If you see any errors within the discord server that needs fixing, message the ``Discord Moderation Team``. ', true)
    .setFooter("Bot made by Kamuji", "https://imgur.com/IqcgMgl.png")
    .setThumbnail("https://imgur.com/wqEDDsX.png")
    message.channel.send(myembed)
 };

  













  
  if (command == "cookie") { // creates the command cookie
    if (args[0]) message.channel.send(message.author.toString() + " has given " + args[0].toString() + " a cookie! :cookie:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
    else message.channel.send("Who do you want to give a cookie to? :cookie: (Correct usage: =cookie @username)") // sends the error message if no-one is mentioned
}

if (command == "8ball") { // creates the command 8ball
  if (args[0] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); // if args[1], post random answer
  else message.channel.send("Ummmm, what is your question? :8ball: ``Correct usage: =8ball <question>``"); // if not, error
}


if (command == "milk") { // creates the command milk
  if (args[0]) message.channel.send(message.author.toString() + " has given " + args[0].toString() + " a glass of milk! :milk:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
  else message.channel.send("Who do you want to give a glass of milk to? :milk:  ``Correct usage: =milk @username``") // sends the error message if no-one is mentioned
}

if (command == "kill") { // creates the command kill
  if (args[0]) message.channel.send(message.author.toString() + " just killed " + args[0].toString() + " holy shizzle! :gun:") // sends the message saying someone has given someone else a cookie if someone mentions someone else
  else message.channel.send("Who do you want to kill? :gun: ``Correct usage: =kill @username``") // sends the error message if no-one is mentioned
}


if (command == "promote") { // creates the command kill
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to promote people!");


  if (args[0]) message.channel.send(message.author.toString() + " promoted " + args[0].toString() + "!") // sends the message saying someone has given someone else a cookie if someone mentions someone else
  else message.channel.send("Who do you want to promote? ``Correct usage: =promote @username``") // sends the error message if no-one is mentioned

}


if (command == "demote") { // creates the command kill
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to demote people!");


  if (args[0]) message.channel.send(message.author.toString() + " demoted " + args[0].toString() + "!") // sends the message saying someone has given someone else a cookie if someone mentions someone else
  else message.channel.send("Who do you want to demote? ``Correct usage: =demote @username``") // sends the error message if no-one is mentioned

}



  if(command === "help") {
     let myembed = new Discord.RichEmbed()
     .setTitle('Commands')
     .setAuthor("SoS AI", "https://imgur.com/OZrgWQH.jpg")
     .setColor('RANDOM')
     .setDescription('These are all the commands that you can currently use on the AI. | ***More will be coming soon!***')
     .addField(':tools: Moderation:', '`=purge` ', true)
     .addField(':smile: Fun Commands:', '`=cookie, =milk, =8ball, =promote, =demote, =kill` ', true)
     .addField(':gear: AI/Server:', '`=ping, =info, =ranks, =species` ')
     .setFooter("AI made by Kamuji", "https://imgur.com/IqcgMgl.png")
     .setThumbnail("https://imgur.com/wqEDDsX.png")
     message.channel.send(myembed)
  }


  if(command === "species") { 
  let myembed = new Discord.RichEmbed() 
  .setTitle('Species') 
  .setAuthor("SoS AI", "https://imgur.com/OZrgWQH.jpg") 
  .setColor('RANDOM') 
  .setDescription('These are all the species in Swords of Sanghelios!') 
  .addField(':eye_in_speech_bubble: SoS Species:', '` Unggoy, Kig-yar, Jiralhanae, Sangheili, Mgalekgolo, Huragok.`', true) 
  .setFooter("AI made by Kamuji", "https://imgur.com/IqcgMgl.png") 
  .setThumbnail("https://imgur.com/wqEDDsX.png")
  message.channel.send(myembed)
  }


  if(command === "ranks") { 
  let myembed = new Discord.RichEmbed() 
    .setTitle('Ranks') 
    .setAuthor("SoS AI", "https://imgur.com/OZrgWQH.jpg") 
    .setColor('RANDOM') 
    .setDescription('These are all the ranks in Swords of Sanghelios!') 
    .addField(':tophat: Sangheili:', '`Minor, Storm, Major, Blademaster, Ultra, Commander, Field Marshall, General, Zealot, Field Master, Shipmaster, Fleetmaster, Supreme Commander, Fleet Admiral, Imperial Fleet Admiral, Councilor, High Councilor, Arbiter. ` ', true) 
    .addField(':mortar_board: Jiralhanae:', '`Minor, Storm, Lance, Captain, Captain Major, Captain Ultra, General, Shipmaster, Fleetmaster, Chieftain, War Chieftain.`')
    .addField(':dark_sunglasses: Kig-Yar:', '`Minor, Storm, Major, Murmillo, Commando, Champion, Ultra, Zealot, Imperial, Commander.`', true) 
    .addField(':eyeglasses: Unggoy:', '`Minor, Storm, Major, Murmillo, Commando, Champion, Ultra, Zealot, Imperial, Commander.`') 
    .setFooter("AI made by Kamuji", "https://imgur.com/IqcgMgl.png") 
    .setThumbnail("https://imgur.com/wqEDDsX.png") 
  message.channel.send(myembed) 
  }


  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to purge!");

    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
	  
	  
	  



  if(command === 'invite') {
    message.channel.send('https://discord.gg/nfcYPRw');


  }}})

  





client.login(token).catch(err => console.log(err));
