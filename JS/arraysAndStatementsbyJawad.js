function reversingArray() {
  var arrayNames = [
    "Sher",
    "Ali",
    "Zaid",
    "Samad",
    "Jawad ",
    "Sameer",
    "Abbas",
    "Ihtisham",
    "Ahmad",
    "Fayaz",
    "Naveed",
    "Zafar",
    "Javed",
    "Kamal",
    "Jamal",
    "Yousuf",
    "Sajid",
  ];
  // console.log("The array of  names is ");
  // console.log(arrayNames);
  // console.log("Arranging the array of names in descending order");
  // var descendingOrder = arrayNames.reverse();
  // console.log(descendingOrder);

  let multiDarray = [
    ["abbas", "Samad", "Ihtisham"],
    ["Mingora", "Kanjo", "Saiud"],
  ];

  for (let rows = 0; rows < multiDarray.length; rows++) {
    for (let cols = 0; cols < multiDarray[rows].length; cols++) {
      console.log(
        ` Value in row ${rows} column ${cols}:  ${multiDarray[rows][cols]}`
      );
    }
    console.log(`Row number ${rows} ended`);
  }
  // let iterator = 0;
  // while (iterator < arrayNames.length) {
  //   console.log(`iteration number ${arrayNames[iterator]}`);
  //   iterator++;
  // }

  // do {
  //   console.log(`iteration number ${arrayNames[iterator]}`);
  //   iterator++;
  // } while (iterator < arrayNames.length);
}
reversingArray();

/**
 *
 *
 * [0 , 1, 2
 *  3, 4, 5]
 *
 *
 */
