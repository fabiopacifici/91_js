/* 
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

// Strumenti
- prompt
- array
- const/let
- if..else
- for loop

*/

const emailAddresses = [
  'example1@exaple.com',
  'example2@exaple.com',
  'example3@exaple.com',
  'example4@exaple.com',
]


const userEamil = 'example12@exaple.com' // prompt('type your email address')

/* if(emailAddresses.includes(userEamil)){
  console.log('can access');
} else {
  console.log('go away');
} */

/* let canAccess = false;
for (let i = 0; i < emailAddresses.length; i++) {
  const thisEmail = emailAddresses[i];
  
  if(thisEmail === userEamil) {
    canAccess = true
  }   
}

console.log(canAccess, 'line 40');

if(canAccess){
  console.log('can access');
} else {
  console.log('go away');
} */


/* 

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


*/


// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const pcNumber = Math.ceil(Math.random() * 6)
const playerNumber = Math.ceil(Math.random() * 6)

console.log(pcNumber, playerNumber);

//Stabilire il vincitore, in base a chi fa il punteggio più alto.
/* Tools
- const/let
- if..else
- operators > 
- Math

*/
let winner;
let pcAttempts = 0;
let playerAttempts = 0;

if(pcNumber > playerNumber) {
  //console.log('pc wins');
  winner = 'Pc'
  pcAttempts++
} else if(playerNumber > pcNumber) {
  //console.log('you win');
  winner = 'Player'
  playerAttempts++

} else {
  //console.log('drawn');
  winner = 'none'
}

console.log(`the winner is ${winner}`);
console.log(`Pc wins ${pcAttempts}`);
console.log(`Pc player ${playerAttempts}`);

