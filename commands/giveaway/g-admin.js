const fs = require('fs')

const config = require('../../db/config.json')
const db = require('../../db/fundatabase.json')

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function update() {
    fs.writeFileSync('./db/fundatabase.json', JSON.stringify(db))
}

module.exports = {
  name: "g-admin",
  run: (args, msg, client) => {
      let prefix = config.prefix
      if (!args[0]) {
        client.sendMessage(`Subcommands: "start", "end", "lock", "unlock", & "joined" - ex. ${prefix}g-admin start`)
        return
      }
      switch (args[0]) {
        case "start":
          if (db.g.creator === '') {
            if (!args[1]) client.sendMessage(`The correct syntax is ${prefix}g-admin start <prize>.`)
            else {
              db.g.creator = msg.auth
              db.g.name = msg.content.split(`${prefix}g-admin start `)
              db.g.locked = 'false'
              update()
              client.sendMessage(`Giveaway created with prize ${db.g.name}! || Use ${prefix}g-admin for management commands!`)
            }
          } else client.sendMessage(`Due to bot space, we can only host one giveaway at a time.`)
          break;
        case "end":
          if (db.g.creator !== '') {
            if (db.g.creator === msg.auth) {
              let x = random(0, db.gj.length)
              client.sendMessage(`The winner of the ${db.g.name} giveaway is ${db.gj[x]}!`)
              db.g.creator = ''
              db.g.name = ''
              db.g.locked = ''
              db.gj = []
              update()
            } else if (args[1] === '--force') {
              if (msg.perm > 2) {
                db.g.creator = ''
                db.g.name = ''
                db.g.locked = ''
                db.gj = []
                update()
                client.sendMessage(`Force ended giveaway with no winner.`)
              }
            } else client.sendMessage(`You must have started the giveaway to end it.`)
          } else client.sendMessage(`There's no giveaway currently in progress, you can start one with ${prefix}g-admin start!`)
          break;
        case "lock":
          if (db.g.creator !== '') {
            if (db.g.creator === msg.auth) {
                db.g.locked = 'true'
              update()
              client.sendMessage(`Locked giveaway, use ${prefix}g-admin unlock to unlock. Locking prevents joining, not running giveaway commands.`)
            } else if (args[1] === '--force') {
              if (msg.perm > 2) {
                db.g.locked = 'true'
                update()
                client.sendMessage(`Force locked the giveaway.`)
              }
            } else client.sendMessage(`You cannot lock this giveaway.`)
          } else client.sendMessage(`There's no giveaway currently in progress, you can start one with ${prefix}g-admin start!`)
          break;
        case "unlock":
          if (db.g.creator !== '') {
            if (db.g.creator === msg.auth) {
                db.g.locked = 'false'
              update()
              client.sendMessage(`Unlocked giveaway, use ${prefix}g-admin lock to lock again.`)
            } else if (args[1] === '--force') {
              if (msg.perm > 2) {
                db.g.locked = 'false'
                update()
                client.sendMessage(`Force unlocked the giveaway.`)
              }
            } else client.sendMessage(`You cannot unlock this giveaway.`)
          } else client.sendMessage(`There's no giveaway currently in progress, you can start one with ${prefix}g-admin start!`)
          break;
        case "joined":
          client.sendMessage(`Giveaway joiners: ${db.gj}`)
          break;
      }
    }
  }