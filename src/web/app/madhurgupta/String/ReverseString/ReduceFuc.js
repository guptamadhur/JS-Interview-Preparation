//Using Reduce
function reverseString(str) {
  return str.split("").reduce((revString, char) => char + revString, "");
}
console.log(reverseString("Learning JavaScript"));
