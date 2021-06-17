// let countriesData = [
//   {
//     name: "Pakistan",
//     capital: "Islamabad",
//     continent: "South Asia",
//   },
//   {
//     name: "Australia",
//     capital: "Melborne",
//     continent: "Australia",
//   },
//   {
//     name: "England",
//     capital: "London",
//     continent: "Europe",
//   },
//   {
//     name: "USA",
//     capital: "NewYork",
//     continent: "America",
//   },
// ];

// for (let data = 0; data < countriesData.length; data++) {
//   console.log(
//     `The country name is ${countriesData[data].name} and its capital is ${countriesData[data].capital} and its continent is ${countriesData[data].continent}`
//   );
// }

//  Example No 2
// let emplyees = [
//   {
//     name: "Abbas",
//     age: 23,
//     sex: "Male",
//     address: "Mingora",
//     designation: "Teacher",
//   },
//   {
//     name: "Ali",
//     age: 25,
//     sex: "Male",
//     address: "HajiBaba Mingora",
//     designation: "Professor",
//   },
//   {
//     name: "Alia",
//     age: 19,
//     sex: "Female",
//     address: "Lahore",
//     designation: "Employee",
//   },
//   {
//     name: "Ahmad Shah",
//     age: 40,
//     sex: "Male",
//     address: "Peshawar",
//     designation: "Principal",
//   },
//   {
//     name: "Ayub Khan",
//     age: 63,
//     sex: "Male",
//     address: "Swat",
//     designation: "Retired Officer",
//   },
//   {
//     name: "Sajid ali Khan",
//     age: 43,
//     sex: "Male",
//     address: "Ahmad abad",
//     designation: "Driver",
//   },
// ];
// for (employeeNo = 0; employeeNo < emplyees.length; employeeNo++) {
//   console.log(
//     `The name of the employee is ${emplyees[employeeNo].name} . The age of this employee is ${emplyees[employeeNo].age} . The gender of this employee is ${emplyees[employeeNo].sex} . The address of this employee is ${emplyees[employeeNo].address} . The designation of this employee is ${emplyees[employeeNo].designation} . \n \n`
//   );
// }

//  Example No 3

// let cricketPlayers = [
//   {
//     name: "Sahid Afridi",
//     team: "Pakistan",
//     role: "All-rounder",
//   },
//   {
//     name: "Dhoni",
//     team: "India",
//     role: "Wk Batsman",
//   },
//   {
//     name: "Brain Lara",
//     team: "West Indies",
//     role: "Batsman",
//   },
//   {
//     name: "Virat Kohli",
//     team: "India",
//     role: "Batsman",
//   },
//   {
//     name: "Shohaib Akhtar",
//     team: "Pakistan",
//     role: "Bowler",
//   },
// ];

// for (playerRecord = 0; playerRecord < cricketPlayers.length; playerRecord++) {
//   console.log(`
//     The name of the player is ${cricketPlayers[playerRecord].name} ,
//     The team of this player is ${cricketPlayers[playerRecord].team} ,
//     This player is ${cricketPlayers[playerRecord].role} \n \n
//     `);
// }

//  Example 4
let animals = [
  {
    name: "Lion",
    type: "Wild Animals",
  },
  {
    name: "Monkey",
    type: "Wild Animals",
  },
  {
    name: "Peacock",
    type: "Birds",
  },
  {
    name: "Horse",
    type: "Pet Animals",
  },
  {
    name: "Parrot",
    type: "Pet Birds",
  },
];

for (let typeAnimals = 0; typeAnimals < animals.length; typeAnimals++) {
  console.log(`
    The following animal ${animals[typeAnimals].name} is a type of  ${animals[typeAnimals].type} 
    `);
}

// Example 5

var things = [
  {
    name: "Lion",
    madeFrom: "Wild Animals",
  },
  {
    name: "chair",
    madeFrom: "Wood",
  },
  {
    name: "ladder",
    madeFrom: "Steel",
  },
];
for (let i = 0; i < things.length; i++) {
  console.log(`
    The name of the object is ${things[i].name} and it is made from ${things[i].madeFrom}
    `);
}
