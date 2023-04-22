function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
module.exports = {
  name: "8ball",
  run: (args, msg, client) => {
    if (!args[0]) {
      client.sendMessage(`Are you gonna ask a question? lmao`)
      return
    }
    let answers = ["As I see it, yes", "It is certain", "It is decidedly so", "Most likely", "Outlook good",
        "Signs point to yes", "Without a doubt", "Yes - definitely", "You may rely on it", "Outlook not so good",
        "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Yes",
        "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Very doubtful"
    ]
    client.sendMessage(answers[random(1, 20)] + ".")
  }
}