let people = require("./../people.json");

/* // Custom JSON file
import people from "../../people.json; */

// Array javascript - age of people in the array in descending order
const peopleAge = people.sort((c1, c2) =>
    (c1.age < c2.age ? 1 : -1));
console.log("Age of people desecding order = ", peopleAge);

// Array javascript - name of people in alph
const peopleName = people.sort((c1, c2) =>
    (c1.name > c2.name ? 1 : -1));


console.log("Name  of people alphabetical order = ", peopleName);

// pulling age of poeple in a new array
const pullAge = people.map(people => people.age);

console.log(pullAge);

module.exports = {
    peopleAge,
    peopleName,
    pullAge
};