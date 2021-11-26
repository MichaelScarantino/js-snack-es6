// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
// contengono solo nomi e falli subiti e stampiamo tutto in console.


// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const teamArray = 
[
    {
        nome: 'juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'genoa',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'sampdoria',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'cagliari',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'salernitana',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
const newTeamArray = [];
for( let i = 0; i < teamArray.length; i++ ) {
    const thisTeam = teamArray[i];
    thisTeam.puntiFatti = getRndInteger(0, 114);
    thisTeam.falliSubiti = getRndInteger(0, 1000);

    // Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
    // contengono solo nomi e falli subiti 
    const { nome, falliSubiti } = thisTeam;
    const teamArrayCopy = {
        nome,
        falliSubiti
    }
    newTeamArray.push(teamArrayCopy);
    
}
// stampiamo tutto in console.
for(let i = 0; i < newTeamArray.length; i++) {
    thisNewTeam = newTeamArray[i];
    console.log(thisNewTeam.nome + ' ' + thisNewTeam.falliSubiti);
}





// --------------
// FUNCTIONS
// --------------
// funzione che genera numeri random
// min -> numero minimo
// max -> numero massimo
// return = numero random generato
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }