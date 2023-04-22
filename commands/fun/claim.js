const axios = require('axios')

module.exports = {
  name: "claim",
  run: (args, msg, client) => {
    axios.get(`https://betastar.org/api/claim/`, {
      headers: {
        Cookie: client.token,
      },
    }).then((res) => {
      if (res.data === "ALREADY CLAIMED") {
        client.sendMessage(`Someone already claimed my daily rewards.`)
      } else {
        client.sendMessage(`You just claimed my rewards! Thanks!`)
      }
    })
  }
}