function reverseString(str) {
  return str.split("").reduce(function (revString, char) {
    return char + revString;
  }, "");
}

console.log(reverseString("Learning JavaScript"));
