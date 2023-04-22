const fs = require('fs')
const config = require('../../db/config.json')
const db = require('../../db/fundatabase.json')

function update() {
  fs.writeFileSync('./db/fundatabase.json', JSON.stringify(db))
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let cname = config.cname
let fcname = config.fullcname
let crimecd = []

module.exports = {
  name: "crime",
  run: (args, msg, client) => {
    try {
      db.cash[msg.auth].toString()

      if (!crimecd.includes(msg.auth)) {
        crimecd.push(msg.auth)
        setTimeout(() => {
          crimecd.splice(crimecd.indexOf(msg.auth), 1)
        }, crimecd * 60000)

        if (random(1, 2) === 1) {
          let ca = random(200, 1000)
          db.cash[msg.auth] = Number(db.cash[msg.auth] + ca)
          update()
          client.sendMessage(`${msg.auth}, you got lucky and pulled off a crime. After splitting the loot, you get ${ca}${cname}.`)

        } else {
          let ca = random(50, 500)
          db.cash[msg.auth] = Number(db.cash[msg.auth] - ca)
          if (db.cash[msg.auth] < 0) {
            db.cash[msg.auth] = 0
            client.sendMessage(`${msg.auth}, you got unlucky and were caught & fined all your ${cname}.`)
          } else client.sendMessage(`${msg.auth}, you got unlucky and were caught & fined ${ca}${cname}.`)
          update()
        }

      } else client.sendMessage(`${msg.auth}, you need to wait a minute before working again!`)
    } catch (e) {
      client.sendMessage(`${msg.auth}, you need a bank to earn cash! Run ${config.prefix}bank to make a bank account.`)
    }
  }
}