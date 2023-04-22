const config = require('../../db/config.json')

module.exports = {
  name: "news",
  run: (args, msg, client) => {
    client.sendMessage(config.currentNews)
  }
}