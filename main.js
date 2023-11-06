'use strict';

// km del viaggio input user e salviamolo in una costante
const kilometers = parseFloat(prompt('Inserisci la lunghezza del viaggio in km'));
console.log('La tratta ha una lunghezza di', kilometers, 'km');

// età del passeggero input user e salviamola in una costante
const age = parseInt(prompt('Inserisci la tua età'));
console.log('L età del passeggero è', age, 'anni');

// prezzo per km
const pricePerKm = 0.21;
console.log('Il prezzo per km è', pricePerKm, '€/km');

// definiamo la variabile sconto e assegnamole un valore valido per il caso no sconto
let discount = 0;
console.log ('Lo sconto iniziale è', discount, '%');

// definiamo la variabile prezzo del biglietto e inseriamo la formula per il calcolo
let ticketPrice = kilometers * pricePerKm * (1 - discount);
console.log('Il prezzo iniziale del biglietto è', (Math.round(ticketPrice * 100) / 100).toFixed(2), '€');

// condizioni di sconto 
if (age < 18) {
  discount = 0.2;
  ticketPrice *= (1 - discount);
}

else if (age >= 65) {
  discount = 0.4;
  ticketPrice *= (1 - discount);
}

// mostriamo lo sconto in console
console.log('Lo sconto a cui hai diritto è', discount * 100, '%');

// salviamo il prezzo finale del biglietto in una variabile e mostriamolo sulla console
let finalTicketPrice = (Math.round(ticketPrice * 100) / 100).toFixed(2);
console.log('Il prezzo finale del biglietto è', finalTicketPrice, '€');




