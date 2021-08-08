const inviteLink = "https://discord.com/api/oauth2/authorize?client_id=873548772544757770&permissions=8&scope=bot"
const color = "RANDOM"
const title = "invite"

const DC = require('discord.js');
const inline = true
const outline = false
module.exports = {
  "name": "invite",
  run(client, message, args) {
    const inviteEmbed = new DC.RichEmbed()
    .setURL("https://discord.com/api/oauth2/authorize?client_id=873548772544757770&permissions=8&scope=bot")
    .setTitle("prefix &")
    .addField("CENTURY OP", inline)
    .addField("ADD ME TO YOUR SERVER", outline)
    .setFooter("CENTURY")
    message.channel.send({ embed: inviteEmbed })
  }
}
