module.exports = {
    name: "rules",
    run: (args, msg, client) => {
      client.sendMessage(`RULES: Rules of Commander are stricked and should be followed.
          1. ABSOLUTELY no abusing commands. This can happen from spamming commands, or using fun commands as a form of harassment.
          2. Have common sense. Even if it doesn't relate to the bot, your behavior in the chat may affect your rank. You don't need to be a goody two shoes, just don't be a jerk.
          3. No alternate accounts. Both your alt and main will be bot banned if we find this. ||
          ALL violations of this will result in a bot-wide ban (this means you cannot run ANY commands). Just follow these rules, it's not hard.`)
    }
  }