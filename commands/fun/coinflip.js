function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
module.exports = {
  name: "coinflip",
  run: (args, msg, client) => {
      if (random(1, 2) === 1) client.sendMessage(`You rolled a heads!`)
      else client.sendMessage(`You rolled a tails!`)
    }
  }