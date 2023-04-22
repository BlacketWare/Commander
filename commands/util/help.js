const config = require('../../db/config.json')

module.exports = {
  name: "help",
  run: (args, msg, client) => {
    client.sendMessage(`Hi, @${msg.auth}, I'm Commander. || IMPORTANT: Commander is having a rewrite to allow more commands! If anything doesn't work, ping Villains to have it fixed. || A list of commands can be found at https://betastar.glitch.me (the prefix "${config.prefix}" should go before each command) || Enjoy Commander!`)
  }
}