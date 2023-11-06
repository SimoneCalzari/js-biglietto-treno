# Calcolatore prezzo biglietti treno

## Descrizione esercizio

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- Il prezzo del biglietto è definito in base ai km (0.21 € al km)
- Va applicato uno sconto del 20% per i minorenni
- Va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

## Human code

Elenchiamo i vari punti del nostro ragionamento in forma linguistica:

1. Definiamo una costante kilometers e facciamoci passare il valore dall'utente tramite un prompt, considerando che tutti i dati inseriti ci arrivano sotto forma di stringa dovremmo convertirli in number tramite parseInt.

2. Definiamo una costante age e facciamoci passare il valore dall'utente tramite un prompt, considerando che tutti i dati inseriti ci arrivano sotto forma di stringa dovremmo convertirli in number tramite parseInt.

3. Definiamo una costante pricePerKm e assegnamole il valore del prezzo del biglietto per chilometro.

4. Definiamo una variabile discount per il valore dell'eventuale sconto sul biglietto e assegnamole un valore iniziale di 0, che corrisponderà al caso in cui l'utente non rientra in nessuna fascia d'età che abbia diritto a sconto.

5. Definiamo una variabile ticketPrice a cui assegniamo come valore la formula per il calcolo del biglietto, ovvero kilometers * pricePerKm * discount, e questo risultato sarà valido per il caso in cui non si abbia diritto a sconti.

6. Consideriamo le due conzioni di sconto e modifichiamo il prezzo del biglietto a seconda del caso del nostro utente: 
   - Se l'età è minore di 18 riassegniamo il valore dello sconto e riassegniamo il prezzo del biglietto in modo da ottenerne il valore scontato.
   - Se l'età è maggiore o uguale a 65 riassegniamo il valore dello sconto e riassegniamo il prezzo del biglietto in modo da ottenerne il valore scontato.

7. Salviamo il prezzo finale in una variabile e mostriamolo sulla console, sfruttiamo la funzione Math.round e la proprietà toFixed(2) per ottenere il prezzo nel formato richiesto dal testo dell'esercizio. (N.B: il risultato convertito con toFixed diventa una STRINGA)   
