const axios = require('axios')

module.exports = {
  name: "user",
  run: (args, msg, client) => {
    axios.get(`https://betastar.org/api/elements/`, {
      headers: {
        Cookie: client.token,
      },
    }).then((res) => {
      elementList = res.data
      axios.get(`https://betastar.org/api/user/?name=${args[0]}`, {
        headers: {
          Cookie: client.token,
        },
      }).then((res) => {
        data = res.data
        if (data === `ERROR|The user "${args[0]}" does not exist.` || data === `Username can not be over 16 characters long.` || data === `ERROR|Hehe, no. You're a ${args[0]}.` || data === `ERROR|That user is retarded.` || data === `ERROR|Username can only contain valid characters.`) {
          client.sendMessage(`User doesn't exist. Are you sure you have the right spelling and case?`)
          return
        } else if (!args[0]) {
          client.sendMessage(`Run the command again, but this time actually enter a username to search.`)
          return
        }

        function discord() {
          if (data.linked === "none") {
            return "not linked"
          } else {
            return data.linked.split("|")[0]
          }
        }

        function profile() {
          if (data.element === '') return "default";
          else if (typeof elementList[data.element] === 'undefined') return "custom";
          else return data.element
        }
        client.sendMessage(`${args[0]}'s stats || Role: ${data.role} || Atoms: ${data.atoms} || Element: ${profile()} || Color: ${data.color} || Discord: ${discord()}`)
      })
    })
  }
}