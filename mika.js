const location1 = ["blabla", "dladla"];
const location2 = ["zz", "yy"];
console.log(listLocations(4, location1, location2));
function genLocations(arr1, arr2) {
  //2 arrays of str
  let word1 = Math.floor(Math.random() * arr1.length); //random num of index in arr1
  let word2 = Math.floor(Math.random() * arr2.length); //random num of index in arr2
  let nameLocation = `${arr1[word1]} ${arr2[word2]}`; //new str contain word from arr1 and second word from arr2
  return nameLocation;
}

function listLocations(num, arr1, arr2) {
  //num is amount of location that we want
  let listLocation = [];
  for (let i = 0; i < num; i++) {
    listLocation.push(genLocations(arr1, arr2));
  }
  return listLocation.join(" ");
}
