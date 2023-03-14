/* 

L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */


/* const firstWord = prompt('Type a number')
const secondWord = prompt('Type another number')  */

const firstWord = 'lo'
const secondWord = 'ips'

if (firstWord.length > secondWord.length) {
  console.log(`La seconda parola ((${secondWord})) é piú corta della prima (${firstWord})`);
} else if (secondWord.length > firstWord.length) {
  console.log(`La prima parola ((${firstWord})) é piú corta della secconda (${secondWord})`);

} else {
  console.log(`Il primo parola (${firstWord}) ed la seconda (${secondWord}) sono lughe uguali`);
}