const config = require('../db/config.json')

module.exports = (client, connect) => {
    console.log(`Connected!`)
    console.log(`Prefix: ${config.prefix}\n`)
    console.log(`Username: ${connect.user.username}`)
    console.log(`Password: ${connect.user.password}`)
    console.log(`PHPSESSID: ${connect.PHPSESSID.split(`PHPSESSID=`)}\n\n`)
    console.log(`\n\nMESSAGE LOGS:`)
}