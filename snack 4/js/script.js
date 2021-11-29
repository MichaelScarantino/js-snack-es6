// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];

// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// inizializzo l'array di stringhe vuoto
// const newStudentsArray = [];

// eseguo forEach dell'array students
// students.forEach( (element, index, array) => {
    // creo una variabile dove inserisco i nomi da rendere maiuscolo
    // let nameToUpper = element.name;
    // in una successiva variabile modifico i nomi e li rendo maiuscoli utilizzando la variabile precedentemente creata
    // let upperName = nameToUpper.toUpperCase();
    // pusho i nomi maiuscoli nell'array vuoto
//     newStudentsArray.push(upperName);
// });
// console.log(newStudentsArray);

// ---------------------------------------------------------------------------------------------------------------------------------------------

// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// creo una variabile con il voto minimo
// const gradesMin = 70;
// eseguo filter e ritorno gli studenti con voto superiore di gradesMin all'interno dei newStudentsArray
// const newStudentsArray = students.filter( (element, index, array) => {
//     return element.grades > gradesMin;
// });
// console.log(newStudentsArray);

// ---------------------------------------------------------------------------------------------------------------------------------------------

// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
// creo una variabile con il voto minimo
const gradesMin = 70;
// creo una variabile con l'id minimo
const idMin = 120;
// eseguo filter e ritorno gli studenti con voto superiore di gradesMin e id superiore di idMin all'interno dei newStudentsArray
const newStudentsArray = students.filter( (element, index, array) => {
    return element.grades > gradesMin && element.id > idMin;
});
console.log(newStudentsArray);