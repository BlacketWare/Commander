const config = require('../../db/config.json')
const db = require('../../db/fundatabase.json')

function name(value) {
  return Object.keys(db.cash)[Object.values(db.cash).indexOf(value)];
}

let fcname = config.fullcname
let ba = []

module.exports = {
  name: "bclb",
  run: (args, msg, client) => {
    for (var idk = 0; idk < db.cusers.length; idk++) {
      ba.push(db.cash[db.cusers[idk]])
    }

    let clb = ba.sort(function(a, b) {
      return a - b
    }).reverse()

    let idk2 = `${fcname} Leaderboard || `
    for (var filb = 0; filb < 11; filb++) {
      if (filb == 0) {
        idk2 = idk2 + `1st: ${name(clb[filb])} (${clb[filb]}) | `
      } else if (filb == 1) {
        idk2 = idk2 + `2nd: ${name(clb[filb])} (${clb[filb]}) | `
      } else if (filb == 2) {
        idk2 = idk2 + `3rd: ${name(clb[filb])} (${clb[filb]}) | `
      } else if (filb == 10) {
        try {
          clb[filb].toString()
          idk2 = idk2 + `10th: ${name(clb[filb])} (${clb[filb]})`
        } catch (e) {}
      } else {
        try {
          clb[filb].toString()
          idk2 = idk2 + `${filb+1}th: ${name(clb[filb])} (${clb[filb]}) | `
        } catch (e) {}
      }
    }

    client.sendMessage(idk2)
  }
}