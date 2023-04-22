const axios = require('axios')

module.exports = {
  name: "gamelb",
  run: (args, msg, client) => {
    axios.get(`https://betastar.org/api/leaderboard/`, {
      headers: {
        Cookie: client.token,
      },
    }).then((res) => {
      leaderboard = res.data
      let str = `1st: ${leaderboard[1].username} (${leaderboard[1].atoms} atoms) | 2nd: ${leaderboard[2].username} (${leaderboard[2].atoms} atoms) | 3rd: ${leaderboard[3].username} (${leaderboard[3].atoms} atoms) | `
      for (var i = 4; i < 10; i++) str = str + `${i}th: ${leaderboard[i].username} (${leaderboard[i].atoms} atoms) | `
      client.sendMessage(`Current Leaderboard || ${str}10th: ${leaderboard[i].username} (${leaderboard[i].atoms} atoms)`)
    })
  }
}