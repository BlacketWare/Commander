const axios = require('axios')

module.exports = {
    name: "crate",
    run: (args, msg, client) => {
      if (!args[0]) {
        client.sendMessage(`Run the command again, but this time actually give me a crate...`)
        return
      }
      axios.get(`https://betastar.org/api/crates/`, {
        headers: {
          Cookie: client.token,
        },
      }).then((res) => {
        data = res.data
        try {
          let name = data[args[0]].name
        } catch (e) {
          client.sendMessage(`The "${args[0]}" crate does not exist.`)
          return
        }
        let elem = ''
        data[args[0]].elements.forEach(element => elem = elem + `${element}, `)
        client.sendMessage(`${data[args[0]].name} - Crate info || Price: ${data[args[0]].price} || Color (hex code): ${data[args[0]].color} || Elements: ${elem}this is how you should refer to each element in commands!`)
      })
    }
  }