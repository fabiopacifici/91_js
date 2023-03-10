/* 
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero 

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica ma usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il riepilogo dei dati inseriti e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
*/

//const fullnameInputEl = document.getElementById('fullname');
//console.log(fullnameInputEl.value);

// Select all dom element
const formEl = document.querySelector('form');
const passengerNameEl = document.querySelector('.passengerName > h4')
const discountEl = document.querySelector('.discount > p')
const finalPriceEl = document.querySelector('.final_price > p')
const wagon = document.querySelector('.wagon > span')
const cp = document.querySelector('.cp > p')
const ticketCardEl = document.querySelector('.ticket_card')
const ticketEl = document.querySelector('.ticket_card > .ticket')
formEl.addEventListener('submit', function (e) {

  e.preventDefault()
  //console.log(e.target.fullname.value);

  /* Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero 

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. */

  // get the fullname input value
  const fullNameInputValue = e.target.fullname.value;
  // get the km input value
  const kmInputValue = Number(e.target.km.value);
  // get the age group input value
  const ageInputValue = e.target.age_group.value;


  // define price per km
  const price_per_km = 0.21
  let discount = 0;
  let discountOfferName = 'Standard Ticket';

  // calculate full ticket price
  let fullTicketPrice = kmInputValue * price_per_km
  // check age groups and apply the discount
  if (ageInputValue === 'underage') {
    discount = 0.2
    discountOfferName = 'UndeAge Ticket';
  } else if (ageInputValue === 'over65') {
    discount = 0.4
    discountOfferName = 'Over65 Ticket';
  }

  // calculate the discounted price
  const discounted_amount = fullTicketPrice * discount
  fullTicketPrice = (fullTicketPrice - discounted_amount).toFixed(2)
  // Generate random number for the wagon
  const wagonNumber = Math.ceil(Math.random() * 9)
  // Generate random number for cp code
  const cpCode = Math.ceil(Math.random() * 99000)

  // show the output onto the console.log
  /* Option 1 */
  // insert passenger name 
  //passengerNameEl.innerHTML = fullNameInputValue
  // Insert offer name
  //discountEl.innerHTML = discountOfferName
  // Insert ticket price
  //finalPriceEl.innerHTML = fullTicketPrice
  // Insert the wangon number into the dom
  //wagon.innerHTML = wagonNumber
  // Insert the cp number into the dom
  //cp.innerHTML = cpCode

  /* Option 2 */
  ticketCardEl.classList.remove('d-none')
  // svuto la card con il ticket
  ticketEl.innerHTML = ''
  const ticketMarkup = `
        <div class="card-body">
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="passengerName">
              <h3>Nome Passeggero</h3>
              <h4>${fullNameInputValue}</h4>
            </div>
          </div>
          <div class="col-12 col-md-2">
            <div class="discount">
              <h4>Discount Name</h4>
              <p>${discountOfferName}</p>
            </div>
          </div>
          <div class="col-12 col-md-2">
            <div class="wagon">
              <h4>Wagon</h4>
              <span>${wagonNumber}</span>
            </div>
          </div>
          <div class="col-12 col-md-2">
            <div class="cp">
              <h4>CP code</h4>
              <p>${cpCode}</p>
            </div>
          </div>
          <div class="col-12 col-md-2">
            <div class="final_price">
              <h4>Final Price</h4>
              <p>${fullTicketPrice}</p>
            </div>
          </div>

        </div>

      </div>`

  ticketCardEl.insertAdjacentHTML('beforeend', ticketMarkup)


    /* Option 3 usando createElement

    
    const liEl = document.createElement('li')
    const spanEl = document.createElement('span')
    spanEl.append('Ciao Classe')
    liEl.appendChild(spanEl)

    console.log(liEl);
  */
})



formEl.addEventListener('reset', function (e) {
  console.log('ho cliccato su reset');
  // svuto il ticket
  ticketEl.innerHTML = ''
  // nascondo la card
  ticketCardEl.classList.add('d-none')
})