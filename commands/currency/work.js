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
let workcd = []

module.exports = {
  name: "work",
  run: (args, msg, client) => {
    try {
      db.cash[msg.auth].toString()

      if (!workcd.includes(msg.auth)) {
        workcd.push(msg.auth)
        setTimeout(() => {
          workcd.splice(workcd.indexOf(msg.auth), 1)
        }, config.workcd * 60000)

        let wa = random(100, 750)
        db.cash[msg.auth] = Number(db.cash[msg.auth] + wa)
        update()

        client.sendMessage(`${msg.auth}, you gained ${wa}${cname} from working!`)
      } else client.sendMessage(`${msg.auth}, you need to wait a minute before working again!`)
    } catch (e) {
      client.sendMessage(`${msg.auth}, you need a bank to earn cash! Run ${config.prefix}bank to make a bank account.`)
    }
  }
}