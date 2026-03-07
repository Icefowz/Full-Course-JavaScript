"use strict";
/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;*/

// 1

// function logger() {
//   console.log("myname is Manos");
// }
// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(pineapples, banana) {
//   const juice = `juice is made with ${pineapples} pineapples and ${banana} banana.`;
//   return juice;
// }

// const tropicalJuice = fruitProcessor(5, 7);
// console.log(tropicalJuice);

// const num = Number('23');
// function describeCountry(country, population, capitalCity) {
//   const description = `${country} has  ${population} million people and its capital is ${capitalCity}`;
//   return description;
// }

// const result = describeCountry("Greece", 6, "Athens");
// console.log(result);
// 2 Function Declarations vs. Expressions

// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }
// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const Greece = percentageOfWorld1(10);
// const Germany = percentageOfWorld1(80);
// const Japan = percentageOfWorld1(120);
// console.log(Greece, Germany, Japan);

///////////////////////////////////////////////
//3 ARROW FUNCTION

// const calcAge3 = (birthYeah) => 2026 - birthYeah;
// const age3 = calcAge3(1994);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2026 - birthYeah;
//   const retirement = 65 - age;
//   //return retirements years
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1994, "Manos"));
// console.log(yearsUntilRetirement(1980, "lora"));

// const percentageOfWorld3 = (poppulation) => (poppulation / 7900) * 100;

// const Greece = percentageOfWorld3(10);
// const Germany = percentageOfWorld3(80);
// const Japan = percentageOfWorld3(120);
// console.log(Greece, Germany, Japan);
