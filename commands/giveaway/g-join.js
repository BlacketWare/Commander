const fs = require('fs')

const config = require('../../db/config.json')
const db = require('../../db/fundatabase.json')

function update() {
    fs.writeFileSync('./db/fundatabase.json', JSON.stringify(db))
}

module.exports = {
  name: "g-join",
  run: (args, msg, client) => {
    if (db.g.creator !== '') {
      if (db.g.locked === 'false') {
        db.gj.push(msg.auth)
        update()
        client.sendMessage(`Joined giveaway! Use ${config.prefix}g-info to learn about the giveaway.`)
      } else client.sendMessage(`This giveaway is locked. You cannot join it.`)
    } else client.sendMessage(`There's no giveaway currently in progress, you can start one with ${config.prefix}g-admin start!`)
  }
}