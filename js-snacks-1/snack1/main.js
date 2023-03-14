/* 

L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
 */
/* 
const firstNumber = Number(prompt('Type a number'))
const secondNumber = Number(prompt('Type another number')) */

const firstNumber = 10
const secondNumber = 10

if(firstNumber > secondNumber) {
  console.log(`Il primo numero (${firstNumber}) é maggiore del secondo (${secondNumber})`);
} else if (secondNumber > firstNumber) {
  console.log(`Il secondo numero (${secondNumber}) é maggiore del primo (${firstNumber})`);
} else {
  console.log(`Il primo numero (${firstNumber}) ed il secondo (${secondNumber}) sono uguali`);
}