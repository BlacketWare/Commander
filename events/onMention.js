const config = require('../db/config.json')
const db = require('../db/database.json')

function update() {
    fs.writeFileSync('./db/config.json', JSON.stringify(config))
    fs.writeFileSync('./db/database.json', JSON.stringify(db))
}

module.exports = (client, msg) => {
    let msgauth = msg.author.name
    
    if (typeof db.perms[msgauth] != 'number') {
        db.perms[msgauth] = 1;
        update()
    }

    if (db.perms[msgauth] === 0) return
    if (config.isLocked && db.perms[msgauth] < 2) return

    client.sendMessage(`Hi, ${msgauth}, I'm Commander, a chatbot for Betastar. You can use ${config.prefix}help to view my commands! Feel free to try some out!`)
}