# Commander
This is the BetastarJS bot. This predated Blacket's ConfidenceBot.

## Brief History
I figured I'd add this here.<br>
<br>
I learned to code in the summar of 2022. It was hard, as I have a learning disability and cannot process large amounts of information.
I tried to create many things with my newfound coding skills. I found and connected with acai over Github and zastix over Betastar and Discord back in time.
Zastix began development of BetastarJS. After working with acai, Confidence would finally run.
Confidence started out as a public repl, before I knew of VSCode. The repl was one file, as I had a limited understanding of coding.
Looking at the BetaTool version history, you can clearly see me struggling to understand the difference between NodeJS and the browser.
Confidece began as a basic bot with a few commands. Overtime, it grew greatly. It became that Confidence kept Betastar alive.
Confidence was not called Confidence, it was Commander. Commander was...different.

## Usage
If you want to use Commander, I first ask why. Betastar is a dead game, but anyone with a basic understanding of NodeJS can use it.<br>
Either way...
```sh-session
git clone https://github.com/VillainsRule/Commander.git
cd Commander
npm i
node index.js
```

## Disclaimer
PLEASE, PLEASE, PLEASE do not use Commander as a bot or as a base for ANYTHING.<br>
The methods are just bad education to young developers.
An example can be found in [/crate](commands/betastar/crate.js):
```js
try {
  let name = data[args[0]].name
} catch (e) {
  client.sendMessage(`The "${args[0]}" crate does not exist.`)
  return
}
```
Considering the name variable is declared in a bad sandbox, it's rather useless.<br>
A good replacement is as follows (though I didn't know it at the time):
```js
if (!data[args[0]]) return client.sendMessage(`The "${args[0]}" crate does not exist.`);
```
I did not decancer/fix/modify the code pre-release.

## A final message
Good luck to rising/new developers.<br>
Coding is hard.<br>
But you are harde-
