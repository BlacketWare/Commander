const fs = require('fs')
const config = require('../../db/config.json')
const db = require('../../db/fundatabase.json')

function update() {
  fs.writeFileSync('./db/database.json', JSON.stringify(db))
}

module.exports = {
  name: "bank",
  run: (args, msg, client) => {
    db.cash[msg.auth] = 69
    db.cusers.push(msg.auth)
    update()
    client.sendMessage(`Welcome to the world of ${config.fullcname}! You've created a bank account, and have gotten some cash to start off. Good luck!`)
  }
}