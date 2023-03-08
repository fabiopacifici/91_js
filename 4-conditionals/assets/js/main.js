/* Conditional Statements 

Syntax:

if(condition) {
  // Blocco di codice da eseguire se la condizione é true
} else {
  // Blocco di codice da eseguire se la condizione é false

}



if(condition) {
  // Blocco di codice da eseguire se la condizione é true
} 
else if (another condition) {
  // Blocco di codice da eseguire se la prima condizione é false
}
else {
  // Blocco di codice da eseguire se la condizione é false
}


*/

const userAge = 21; // < --- Execute
console.log(userAge >= 18); // < --- Execute
//let canAccess;

if (userAge >= 18) { // < --- Execute
  // Blocco di codice da eseguire
  //canAccess = true
  console.log('You can access the site'); // < --- Execute
} else {
  // Blocco di codice da eseguire
  //canAccess = false
  console.log('Sorry, you cannot access the site');
}


//console.log(canAccess);

console.log('Fuori dalle condizioni'); // < --- Execute

/* And, Or , not */

console.log('################################');

const age = 15; // < --- Execute
const current_year = 2023
console.log(age >= 18); // < --- Execute

//let canAccess;

if (age >= 18 || current_year === 2023) { // < --- Execute
  // Blocco di codice da eseguire
  //canAccess = true
  console.log('You can access the site'); // < --- Execute
} else {
  // Blocco di codice da eseguire
  //canAccess = false
  console.log('Sorry, you cannot access the site');
}


//console.log(canAccess);

console.log('Fuori dalle condizioni'); // < --- Execute


/* Operatori relazionali */
const current_month = 3
console.log(current_month == '3'); // true -> false
console.log(current_month != '3');
console.log(current_month === '3');
console.log(current_month !== '3');
console.log(current_month > 12);
console.log(current_month < 12);
console.log(current_month >= 12);
console.log(current_month <= 12);

// Not
console.log(!current_month == '3'); // true -> false
console.log(!current_month != '3'); // false -> true


