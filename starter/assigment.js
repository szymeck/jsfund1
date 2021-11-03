// const description = `Portugal is in Europe, and its 11 million people
//  speak portuguese`;
// const isIsland = false;
// const language = 'polish'
// let population = 39;
// const country = "Poland";
// // console.log(typeof isIsland);
// console.log(isIsland, language, population, country, description);

// const halfPopulation = population / 2;
// const halfPopulationPlus = halfPopulation + 1;
// const popFinland = 6;
// const popPortugal = 11;
// const countryCompare = popFinland > population;
// const averagePop = 10;
// const averageCompare = population < averagePop;
// console.log(halfPopulation, halfPopulationPlus, countryCompare, averageCompare);

// if (popPortugal > averagePop) {
//     const averagePop = 130;
//     const averageCompare = population < averagePop;
//     console.log(halfPopulation, halfPopulationPlus, countryCompare, averageCompare);
// }
// else {
//     const portugalPopComp = averagePop - popPortugal;
//     console.log(`Portugal's population is ${portugalPopComp} million below average`);
// }

// // const numNeighbours = Number(prompt('How many neighbour countries does your country have'));

// // if (numNeighbours === 1) {
// //     console.log('only 1 border');
// // }
// // else if (numNeighbours > 1) {
// //     console.log('more than 1');
// // }
// // else {
// //     console.log(' no borders');
// // }

// if (language == 'english' && population < 50 && !isIsland) {
//     console.log('you should live in poland');
// }
// else {
//     console.log('dont live here');
// }
const language = 'mandarin'
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('number 4');
        break;
    case 'arabic':
        console.log('5 most spoken');
        break;
    default:
        console.log('great language too');
        break;
}

const population = 13;
population > 33 ? 'above' : 'below';

console.log(`Polish population is ${population > 33 ? 'above' : 'below'} average `)