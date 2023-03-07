/* Strings 
- definisco una stringa racchiudento testo o numeri nelle virgolette ""
- definisco una stringa racchiudento testo o numeri negli apici ''
- definisco una stringa racchiudento testo o numeri nei backtick ""

'Fabio Pacifici' // <-- String
"Fabio Pacifici" // <-- String
`Fabio Pacifici` // <-- String
*/


const user_fabio_full_name = "Fabio Pacifici"
const user_fra_full_name = 'Francesco Minutella'

console.log(user_fabio_full_name, user_fra_full_name);


const user_martina_full_name = 'Martina D\'Rose';
const quote = "Questa é una citazione: \" Qui c'é js \" ";

console.log(user_martina_full_name);
console.log(quote);


// Strings contatenation


// concatenazione di stringhe
const miaStringa = "Rosso" + "Acceso";
alert(miaStringa); // cosa uscirà? RossoAcceso



// numeri o stringhe?
const stringa = '8'; //questa è una stringa
const numero = 8; //questo è un numero

console.log(stringa, numero);

console.log(stringa + numero);
console.log(stringa * numero);


/* Template literal */

const userAge = 43
const userName = 'Fabio'
const job = 'Developer'

const sentence = `Ciao, 
mi chiamo ${userName}, ho ${userAge} 
e di mestiere faccio il ${job}`

console.log(sentence);

console.log("Ciao, mi chiamo " + userName + ", ho " + userAge + " e di mestiere faccio il " + job);
