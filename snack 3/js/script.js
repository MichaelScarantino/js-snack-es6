// Dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// creo le due variabili min e max 
// const min = 2;
// const max = 5;
// inizializzo l'array vuoto
// const newArray = [];
// eseguo forEach dell'array iniziale, se il numero dell'indice e compreso tra min e max lo pusho nel nuovo array
// myArray.forEach( (element, index, array) => {
//     if( index > min && index < max ) {
//         newArray.push(element);
//     }
// });
// console.log(newArray);

// --------------------------------------------------------------------

// creo le due variabili min e max 
const min = 2;
const max = 5;

// eseguo filter e ritorno gli elementi che sono compresi tra min e max all'interno dei newArray
const newArray = myArray.filter( (element, index, array) => {
    return index > min && index < max ;
});
console.log(newArray);