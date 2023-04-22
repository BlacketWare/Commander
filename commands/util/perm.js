const db = require('../../db/database.json')

module.exports = {
  name: "perm",
  run: (args, msg, client) => {
    const perminfo = [
      " perm level is 0, botban.",
      " perm level is 1, default.",
      " perm level is 2, trusted.",
      " perm level is 3, bot developer."
    ]
    if (!args[0]) return client.sendMessage(`@${msg.auth}, your${perminfo[msg.perm]}`)
    try {
      permext = perminfo[db.perms[args[0]]].toString()
      client.sendMessage(`${args[0]}'s${perminfo[db.perms[args[0]]]}`)
    } catch {
      client.sendMessage(`${args[0]}'s${perminfo[1]}`)
    }
  }
}