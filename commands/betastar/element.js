const axios = require('axios')

module.exports = {
  name: "element",
  run: (args, msg, client) => {
    axios.get(`https://betastar.org/api/elements/`, {
      headers: {
        Cookie: client.token,
      },
    }).then((res) => {
      elementList = res.data
      try {
        client.sendMessage(`${args[0]} - Element info || Rarity: ${elementList[args[0]].rarity} || Sell price: ${elementList[args[0]].price} || Drop rate: ${elementList[args[0]].chance}%`)
      } catch (e) {
        client.sendMessage(`The element "${args[0]}" does not exist.`)
      }
    })
  }
}