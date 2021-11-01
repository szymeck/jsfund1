/*let js = 'amazing';

console.log(40 + 20 + 9);

console.log('jonas');

let firstName = "mat";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
let myFirstJob = "front end";
console.log(myFirstJob);

// country info
let country = "Poland";
let continent = "Europe";
let population = "39 milions";
console.log(country, continent, population);



let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'job');

javaScriptIsFun = 'New value';
console.log(typeof javaScriptIsFun);
let year;
console.log(year);
console.log(typeof year);

year = 1987;
console.log(year);
console.log(typeof year);

console.log(typeof null);

const description = 'Portugal is in Europe, and its 11 million people speak portuguese';
const isIsland = false;
const language = 'polish'
let population = 39;
const country = "Poland";
// console.log(typeof isIsland);


let age = 30;
age = 34;
const birthDate = 1987;

console.log(isIsland, language, population, country, age, description);

const now = 2037;
const ageSimon = now - 2020;
const ageMat = now - 1984;

console.log(ageSimon, ageMat);

console.log(ageSimon * 2, ageMat / 2, 2 ** 3);

const firstName = 'szymi';
const lastName = 'sob';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; //15
x += 10; //x = x+10 = 25
x *= 4
x++;
console.log(x);

console.log(ageSimon < ageMat);
console.log(ageSimon >= 18);
const isFullage = ageSimon >= 18;

const halfPopulation = population / 2;
const halfPopulationPlus = halfPopulation + 1;
const popFinland = 6;
const countryCompare = popFinland > population;
const averagePop = 33;
const averageCompare = population < averagePop;

console.log(halfPopulation, halfPopulationPlus, countryCompare, averageCompare);
console.log(ageSimon > ageMat);
console.log(now - 2020 > now - 1984);

const now = 2037;
const ageSimon = now - 2020;
const ageMat = now - 1984;
let x, y;
x = y = 25 - 10 - 5
console.log(x, y);
const averageAge = (ageSimon + ageMat) / 2;
console.log(averageAge);

const markHi1 = 1.69;
const markWe1 = 78;
const johnHi1 = 1.95;
const johnWe1 = 92;
const markHi2 = 1.88;
const markWe2 = 95;
const johnHi2 = 1.76;
const johnWe2 = 85;

const mark1Bmi = markWe1 / markHi1 ** 2;
const mark2Bmi = markWe2 / markHi2 ** 2;
const john1Bmi = johnWe1 / johnHi1 ** 2;
const john2Bmi = johnWe2 / johnHi2 ** 2;
const markHigherBmi1 = (mark1Bmi > john1Bmi);
const markHigherBmi2 = (mark2Bmi > john2Bmi);
console.log(mark1Bmi, mark2Bmi, john1Bmi, john2Bmi, markHigherBmi1, markHigherBmi2);

const firstName = 'Szymon';
const job = 'salesman';
const birthDate = 1987;
const year = 2021;

const szymon = "I'm " + firstName + ', a ' + job + ', and i have ' + (year - birthDate) + ' years.';
console.log(szymon);

const szymonNew = `I'm ${firstName}, a ${year - birthDate} year old ${job}`;
console.log(szymonNew);

console.log(`asadad`);
*/
const age = 15;

if (age >= 18) {
    console.log('Szymi moze zacząc jeździć🛴');
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young, you have to wait ${yearsLeft} more years`);
}

const birthYear = 1987;
let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);

const markHi1 = 1.69;
const markWe1 = 78;
const johnHi1 = 1.95;
const johnWe1 = 92;

const mark1Bmi = markWe1 / markHi1 ** 2;

const john1Bmi = johnWe1 / johnHi1 ** 2;

console.log(mark1Bmi, john1Bmi);

if (mark1Bmi > john1Bmi) {
    console.log(`Mark's BMI (${mark1Bmi}) is higher than John's (${john1Bmi}) !`);
}
else {
    console.log(`Johns's
    BMI(${john1Bmi}) is higher than Marks's (${mark1Bmi})!`)
};
// type conversion
const inputYear = '1991';
console.log(Number(inputYear));

console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));

console.log(String(23));

//type ceorsion
console.log('I am ' + 23 + ' years old');
console.log(Number('190') + Number('9'));



console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean(''));


const money = 10;
if (money) {
    console.log('dont spand it all');
}
else {
    console.log('get a job');
};

let iq;
if (iq >= 100) {
    console.log('you are smart');
}
else {
    console.log('you are stupid');
}










