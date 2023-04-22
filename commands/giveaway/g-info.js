const config = require('../../db/config.json')
const db = require('../../db/fundatabase.json')

module.exports = {
  name: "g-info",
  run: (args, msg, client) => {
    if (db.g.creator !== '') client.sendMessage(`${db.g.name} Giveaway Info! || Host: ${db.g.creator} || Prize: ${db.g.name} || Locked: ${db.g.locked} || To join, use ${config.prefix}g-join!`)
    else client.sendMessage(`There's no giveaway currently in progress, you can start one with ${config.prefix}g-admin start!`)
  }
}