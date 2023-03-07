/* Variales */
/* 
- Dichiarazione della variabile
- Inizializzazione della varibile
*/

// 💥 Const non é riassegnabile
const username = 'Fabio';

console.log(username);

//username = 'Mario'; // 😨 Type Error

/* Devo inizializzare la variabile 
va creata e gli va assegnato un valore
*/

// const userAge; //Uncaught SyntaxError: Missing initializer in const declaration

// Let 

let movie = 'Matrix';
console.log(movie); // <-- variable movie che contriente Matrix
console.log('movie'); // <-- stringa di testo movie

movie = 'Avatar';
console.log(movie); // <-- variable movie che contriente Matrix


/* Dichiarazione e post inizializzazione */

//console.log(tv_show); // Non posso accedere ad una variablile prima delal definizione se let o const

let tv_show, today;
console.log(tv_show, today);

tv_show = "Rick & Morty";
console.log(tv_show);


today = "Martedi";
console.log(today);


const domElement = document.getElementById('title');
console.log(domElement.innerHTML = 'Ciao');

/* Variabili con var */
console.log(favouriteMovie);
var favouriteMovie = 'Matrix';
console.log(favouriteMovie);



/* Variables Syntax 

- solo lettere numeri e trattini bassi _
- mai un numero all'inizio
- mai usare le parole chiave di js ad esempio `getElementById`
*/


let customer_age // SI
let customerAge // SI
let under18 // SI
let under_18 // SI
let person // SI
let PERSON // SI ma é diversa da quella sopra

/* Variabili incorrette (non fatelo) */

let varibaile_1 // NO
let variabile_2 // NO
//let 3_variable // NO
//let !_variable // NO
let getElementById // NO 
//let let // NO
//let const // NO

/* Example */
// dichiarazione variabile
let miaStringa;

// assegnazione
miaStringa = 'ciao';
// utilizzo/richiamo
alert(miaStringa);

// assegnazione
miaStringa = 'arrivederci';
// utilizzo/richiamo
alert(miaStringa);



/* Tipizzazione */

let catName = 'Antifa'
catName = 12;
catName = [];