const config = require('../../db/config.json')
const db = require('../../db/fundatabase.json')

let cname = config.cname

module.exports = {
  name: "balance",
  run: (args, msg, client) => {
    if (!args[0]) {
      try {
        db.cash[msg.auth].toString()
        client.sendMessage(`${msg.auth}, you currently have ${db.cash[msg.auth]}${cname} in your bank.`)
      } catch (e) {
        client.sendMessage(`${msg.auth}, you need a bank to earn cash! Run ${config.prefix}bank to make a bank account.`)
      }
    } else {
      try {
        db.cash[args[0]].toString()
        client.sendMessage(`${args[0]} has ${db.cash[args[0]]}${cname} in their bank.`)
      } catch (e) {
        client.sendMessage(`${args[0]} hasn't set up a bank yet :(`)
      }
    }
  }
}