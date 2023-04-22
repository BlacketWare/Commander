const axios = require('axios')

module.exports = {
  name: "userelements",
  run: (args, msg, client) => {
    if (!args[0]) {
      client.sendMessage(`Run the command again, but this time tell me who you're looking up.`)
      return
    }
    axios.get(`https://betastar.org/api/user/elements/?name=${args[0]}`, {
      headers: {
        Cookie: client.token,
      },
    }).then((res) => {
      let tosend = `Viewing ${args[0]}'s elements || `
      if (res.data === "") {
        client.sendMessage(`${args[0]} has no elements.`)
      } else {
        Object.entries(res.data).forEach((entry) => {
          const [key, value] = entry
          tosend = tosend + `${key} (${value}), `
        })
        client.sendMessage(`${tosend} Betastar (1)`)
      }
    })
  }
}