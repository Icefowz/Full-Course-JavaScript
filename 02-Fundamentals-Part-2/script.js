// "use strict";
// /*
// ///////////////////////////////////////
// // Activating Strict Mode
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// // const interface = 'Audio';
// // const private = 534;*/

// // 1

// // function logger() {
// //   console.log("myname is Manos");
// // }
// // // calling / running / invoking function
// // logger();
// // logger();
// // logger();

// // function fruitProcessor(pineapples, banana) {
// //   const juice = `juice is made with ${pineapples} pineapples and ${banana} banana.`;
// //   return juice;
// // }

// // const tropicalJuice = fruitProcessor(5, 7);
// // console.log(tropicalJuice);

// // const num = Number('23');
// // function describeCountry(country, population, capitalCity) {
// //   const description = `${country} has  ${population} million people and its capital is ${capitalCity}`;
// //   return description;
// // }

// // const result = describeCountry("Greece", 6, "Athens");
// // console.log(result);
// // 2 Function Declarations vs. Expressions

// // function calcAge1(birthYeah) {
// //   return 2037 - birthYeah;
// // }
// // const age1 = calcAge1(1991);

// // // Function expression
// // const calcAge2 = function (birthYeah) {
// //   return 2037 - birthYeah;
// // }
// // const age2 = calcAge2(1991);

// // console.log(age1, age2);

// // function percentageOfWorld1(population) {
// //   return (population / 7900) * 100;
// // }

// // const percentageOfWorld2 = function (population) {
// //   return (population / 7900) * 100;
// // };

// // const Greece = percentageOfWorld1(10);
// // const Germany = percentageOfWorld1(80);
// // const Japan = percentageOfWorld1(120);
// // console.log(Greece, Germany, Japan);

// ///////////////////////////////////////////////
// //3 ARROW FUNCTION

// // const calcAge3 = (birthYeah) => 2026 - birthYeah;
// // const age3 = calcAge3(1994);
// // console.log(age3);

// // const yearsUntilRetirement = (birthYeah, firstName) => {
// //   const age = 2026 - birthYeah;
// //   const retirement = 65 - age;
// //   //return retirements years
// //   return `${firstName} retires in ${retirement} years`;
// // };

// // console.log(yearsUntilRetirement(1994, "Manos"));
// // console.log(yearsUntilRetirement(1980, "lora"));

// // const percentageOfWorld3 = (poppulation) => (poppulation / 7900) * 100;

// // const Greece = percentageOfWorld3(10);
// // const Germany = percentageOfWorld3(80);
// // const Japan = percentageOfWorld3(120);
// // console.log(Greece, Germany, Japan);

// // 4
// //////Function Calling Other Functions
// // function cutFruitPieces(fruit) {
// //   return fruit * 4;
// // }
// // function fruitProcessor(apples, oranges) {
// //   const applePieces = cutFruitPieces(apples);
// //   const orangePieces = cutFruitPieces(oranges);
// //   const juice = `juice with ${applePieces} piece of apple and ${orangePieces} piece of orange`;
// //   return juice;
// // }
// // console.log(fruitProcessor(3, 4));

// //Challenge ##1 Using Function

// // const calcAverage = (round1,round2,round3) => (round1+round2+round3)  / 3;

// // const scoreDolphins = calcAverage(15,18,40);
// // const scoreKoalas = calcAverage(16,54,34);

// // function checkWinner(avgDolphins,avgKoalas) {
// //     if ( avgDolphins > (avgKoalas * 2) ) {
// //         console.log(`Dolphin win (${avgDolphins} vs. ${avgKoalas})`);
// //         return;
// //     }
// //     if ( avgKoalas > (avgDolphins * 2) ) {
// //         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
// //         return;
// //     }
// //     console.log("no team wins")
// // }
// // checkWinner(scoreDolphins,scoreKoalas);
// // 5
// ////////////Array//////////

// ////exercise
// // const calcAge = function (birthYeah) {
// //   return 2026 - birthYeah;
// // };
// // const years = [1990, 1994, 2002, 2010, 2018];
// // const age1 = calcAge(years[0]);
// // const age2 = calcAge(years[1]);
// // const age3 = calcAge(years[years.length - 1]);
// // console.log(age1, age2, age3);

// // const ages = [
// //   calcAge(years[0]),
// //   calcAge(years[1]),
// //   calcAge(years[years.length - 1]),
// // ];
// // console.log(ages);

// ///6
// //  Basic Array Operations (Methods)
// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }
// const neighbours = ["Italy", "Turkey", "Bulgaria"];
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop("Utopia");
// console.log(neighbours);

// if (neighbours.includes("germany")) {
//   console.log("EUROPE COUNTRY");
// }
// neighbours[neighbours.indexOf("Turkey")] = "Turkiey;";
// console.log(neighbours[1]);
// console.log("probably not a European Country");

// 7 CODING CHALLENGE #2 Arrays
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// const Manos = {
//   firstName: "Manos",
//   lastName: "Xaris",
//   age: 2037 - 1994,
//   job: "developer",
//   friends: ["Michael", "peter", "Steven"],
// };

// const nameKey = "Name";
// console.log(Manos["first" + nameKey]);
// console.log(Manos["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Manos? choose between firstname, lastname, age, job and friends",
// );
// if (Manos[interestedIn]) {
//   console.log(Manos[interestedIn]);
// } else {
//   console.log(
//     "Wrong Request! Choose between firstname, lastname, age, job and friends  ",
//   );
// }
// //challenge
// //Manos has 3 friends and his best friend is called Michael
// console.log(
//   Manos.firstName,
//   "has",
//   Manos.friends.length,
//   " friends and his best friend is",
//   Manos.friends[0],
// );
