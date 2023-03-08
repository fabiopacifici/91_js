/* 
insicurissimo password generator

Decrizione passaggi:
Chiedi all'utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23

// Strumenti
- prompt
- const/let
- document.getElementById

*/


// Chiedi all'utente il suo nome
const first_name = prompt('Come ti chiami?');

// chiedi il suo cognome
const lastname = prompt('Quale é il tuo cognome?');


// poi chiedi il suo colore preferito
const favourite_color = prompt('Quale é il tuo colore preferito?');

console.log(first_name);
console.log(lastname);
console.log(favourite_color);


/* scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23 

- seleziono un elemento della dom nel quale stampare il risultato
- prendo il suo inner html e lo sostituisco col la striga della password

*/

const passwordEl = document.getElementById('password');
console.log(passwordEl);
console.log(passwordEl.innerHTML);


passwordEl.innerHTML = `${first_name + lastname + favourite_color}23`

