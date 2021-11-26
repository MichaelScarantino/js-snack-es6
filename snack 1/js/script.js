// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

//  Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const bikeArray = 
[
    {
        nome: 'savadeck',
        peso: 5
    },
    {
        nome: 'olmo',
        peso: 7
    },
    {
        nome: 'tongdejing',
        peso: 9
    },
    {
        nome: 'bergamont',
        peso: 8
    },
    {
        nome: 'cannondale',
        peso: 4
    },
    {
        nome: 'olmo',
        peso: 5
    },
    {
        nome: 'giant tcr',
        peso: 9
    },
    {
        nome: 'wilier gtr',
        peso: 6
    }
    
];


// inizializzo una variabile con il primo oggetto
let lessBikeWeight = bikeArray[0];
// scorro l'array e verifico la bici con il peso minore
for( let i = 0; i < bikeArray.length; i++) {
    thisBike = bikeArray[i];
    if( thisBike.peso < lessBikeWeight.peso ) {
        lessBikeWeight = thisBike;
    };

};
console.log(lessBikeWeight);
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

const { nome, peso } = lessBikeWeight;
const bikeHtml = `
<div id="less-weight">
    <h3>Nome: ${nome}</h3>
    <span>Peso: ${peso} kg</span>
</div>
`;
const bikeContainer = document.getElementById('bike-container');
bikeContainer.innerHTML = bikeHtml;