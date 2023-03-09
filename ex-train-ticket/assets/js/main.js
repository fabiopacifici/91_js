/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Strumenti
- const/let
- prompt
- Number/parseInt
- getElementById
- toFixed()
- if/else

*/


// 1. Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
const km = Number(prompt('Quanti km devi percorrere? ie. 10'))

// 2. Il programma dovrà chiedere l'età del passeggero.
const passengerAge = Number(prompt('Quanti anni ha il passeggero'));

console.log(km,passengerAge);
/* 3. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 
 - il prezzo del biglietto è definito in base ai km (0.21 € al km)
 - se minore: va applicato uno sconto del 20% 
 - altrimenti se over65: va applicato uno sconto del 40%
 - altrimenti: prezzo pieno
*/

const price_per_km = 0.21
let ticket_price = km * price_per_km;
console.log(ticket_price, 'Prezzo intero riga 36');

let discount = 0
if(passengerAge < 18) {
  discount = 0.2
} else if(passengerAge > 65) {
  discount = 0.4
}
console.log(discount, 'discount');

const discountAmount = ticket_price * discount
console.log(discountAmount, 'discount amount');

ticket_price = ticket_price - discountAmount

console.log(ticket_price, 'discounted price');


// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

const priceElement = document.getElementById('price');

if (isNaN(ticket_price)) {
  alert('Ciao, devi inserire nei campi dei numeri e non dei testi')
  // mopstro a schermo un messaggio di errore al posto del prezzo
  priceElement.innerHTML = `Ops! Errore, non hai inserito correttamente i dati richiesti. Usa solo numeri`

} else {
  // stampa a schermo il risultato.
  priceElement.innerHTML = `€ ${ticket_price.toFixed(2)}`

}
