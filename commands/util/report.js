const fs = require('fs')

const config = require('../../db/config.json')
const reports = require('../../db/reports.json')

function update() {
  fs.writeFileSync('./db/reports.json', JSON.stringify(reports))
}

module.exports = {
  name: "report",
  run: (args, msg, client) => {
    reports[Math.random().toString().split('0.')[1]] = {
      user: msg.auth,
      report: msg.content.split(`${config.prefix}report `)[1],
      read: false
    }
    update()
    client.sendMessage(`${msg.auth}, your report has been sent to Commander's admin system.`)
  }
}