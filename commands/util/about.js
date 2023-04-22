const config = require('../../db/config.json')

module.exports = {
  name: "about",
  run: (args, msg, client) => {
    client.sendMessage(`@${msg.auth}, I'm Commander, and I try to improve Betastar.
        I have many commands all made to make sure Betastar is a fun and everupdated place.
        If you have any bot issues or concerns, ping Villains and he will sort them out.
        Have fun using Commander, the bot made to improve Betastar.
        (hint: use ${config.prefix}help to see my commands!)`)
  }
}