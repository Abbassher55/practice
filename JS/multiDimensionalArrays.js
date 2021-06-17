//  Multi Dimesional Arrays Example

let CountriesCapital = [
  ["England", "Pakistan", "Turkey", "UAE", "KSA"],
  ["London", "IslamAbad", "Istambul", "Abu Dhabi", "Riyadh"],
];

for (let countries = 0; countries < CountriesCapital.length; countries++) {
  for (
    let capitalCities = 0;
    capitalCities < CountriesCapital[countries].length;
    capitalCities++
  ) {
    console.log(
      ` Country name And there capital is  ${CountriesCapital[countries][capitalCities]}`
    );
  }
  console.log(`Next Country in our list is`);
}

// Example 2
let FirstAndLastNames = [
  ["Shahid", "Nouman", "Saleem", "Sajid", "Sulaiman"],
  ["Ali", "Khan", "Ahmad", "Khan", "Riyadh"],
];

for (let firstName = 0; firstName < FirstAndLastNames.length; firstName++) {
  for (
    let LastName = 0;
    LastName < FirstAndLastNames[firstName].length;
    LastName++
  ) {
    console.log(
      ` First name and Last name is  ${FirstAndLastNames[firstName][LastName]}`
    );
  }
  console.log(`Next Name in our list is`);
}
