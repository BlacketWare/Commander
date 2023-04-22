const fs = require('fs');

const margs = require('../db/args.json')
const config = require('../db/config.json')
const db = require('../db/database.json')
const fdb = require('../db/fundatabase.json')

function update() {
    fs.writeFileSync('./db/config.json', JSON.stringify(config))
    fs.writeFileSync('./db/database.json', JSON.stringify(db))
    fs.writeFileSync('./db/fundatabase.json', JSON.stringify(fdb))
}

module.exports = (client, message) => {
    if (config.shouldlog) {
      console.log(`[${message.author.role}] ${message.author.name} > ${message.content}`)
    }

    let msgauth = message.author.name
    let prefix = config.prefix

    if (typeof db.perms[msgauth] != 'number') {
        db.perms[msgauth] = 1;
        update()
    }
    let perm = db.perms[msgauth]
    
    if (db.perms[msgauth] === 0) return
    if (config.isLocked && perm < 2) return

    if (!message.content.startsWith(prefix)) return
    args = message.content.slice(prefix.length).trim().split(/ +/g)
    command = args.shift().toLowerCase()

    let msg = {
        auth: msgauth,
        perm: perm,
        content: message.content,
        raw: message
    }
    
    if (client.commands[command]) {
        client.commands[command].run(args, msg, client);
        return;
    }

    if (margs[command]) client.commands[args[command]].run(args, msg, client);
}