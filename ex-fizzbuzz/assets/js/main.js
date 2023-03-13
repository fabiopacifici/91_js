/* 

**Consegna:**

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
far svolgere al nostro programma così come lo faremmo "a mano"

**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.

**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. 
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

*/

const containerEl = document.querySelector('.container')
// Scrivi un programma che stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  //console.log(i);
  const divEl = document.createElement('div');
  //const divElMarkup = `<div></div>`;
  // i % 3 === 0 && i % 5 === 0
  if (i % 15 === 0) {
    //console.log('FizzBuzz');
    divEl.append('FizzBuzz');
    divEl.style.backgroundColor = 'green'

  } else if (i % 3 === 0) {
    // per i multipli di 3 stampi “Fizz” al posto del numero
    //console.log('Fizz');
    divEl.append('Fizz');
    divEl.style.backgroundColor = 'purple'


  } else if (i % 5 === 0) {
    // per i multipli di 5 stampi “Buzz” al posto del numero
    //console.log('Buzz');
    divEl.append('Buzz');
    divEl.style.backgroundColor = 'red'
  } else {
    //console.log(i);
    divEl.appendChild(i);

  }

  //containerEl.append(divEl)
  containerEl.insertAdjacentElement('beforeend', divEl)
  //containerEl.insertAdjacentHTML('beforeend', divElMarkup)
}



// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”

// altrimenti stampo il numero