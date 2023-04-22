const betastarjs = require('betastar.js');
const fs = require('fs');

const args = require('../db/args.json');

let client = new betastarjs('Commander', password);
client.commands = {};

fs.readdirSync('./commands/').forEach((folder) => {
  fl = fs.readdirSync(`./commands/${folder}/`).filter(a => a.endsWith('.js'));
  fl.forEach((file) => {
    command = require(`./commands/${folder}/${file}`);
    client.commands[command.name] = command;
    if (args[command.name]) client.commands[args[command.name]] = command;
  });
});

fs.readdirSync('./events/').filter(a => a.endsWith('.js')).forEach((file) => {
  let event = require(`./events/${file}`);
  client.on(file.split('.')[0], event.bind(null, client));
});