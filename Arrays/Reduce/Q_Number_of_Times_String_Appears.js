/* Transform an array of strings into a single object that shows,
how many times each string appears in the array.*/

var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

var petCounts = pets.reduce(function (obj, pet) {
  if (!obj[pet]) {
    // if the pet doesn't yet exist as a property of the accumulator object,
    // add it as a property and set its count to 1
    obj[pet] = 1;
  } else {
    // pet exists, so increment its count
    obj[pet]++;
  }
  return obj; // return the modified object to be used as accumulator in the next iteration
}, {}); // initialize the accumulator as an empty object

console.log(petCounts);
