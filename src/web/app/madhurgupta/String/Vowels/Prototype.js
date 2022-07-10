String.prototype.numberOfVowels = function () {
  return this.match(/[aeiou]/gi).length;
};
console.log("found".numberOfVowels()); //2
console.log("goibibo".numberOfVowels()); // 2
console.log("mmt".numberOfVowels()); // 0
console.log("javascript".numberOfVowels()); // 2
