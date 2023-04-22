const db = require('../../db/database.json')

module.exports = {
  name: "hack",
  run: (args, msg, client) => {
      if (db.perms[args[0]] > 1) return client.sendMessage(`Legends simply cannot be hacked. Nice try...`)
      if (!args[0]) return client.sendMessage(`You gotta tell someone to hack, that's the only way to actually hack LOL`)

      let password = '';
      const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>/?~-_=+\|"
      for (var i = 0; i < 17; i++) password += possible.charAt(Math.floor(Math.random() * possible.length))

      client.sendMessage(`@${msg.auth}, you just hacked ${args[0]}. Username: ${args[0]} && Password: ${password}`)
    }
  }