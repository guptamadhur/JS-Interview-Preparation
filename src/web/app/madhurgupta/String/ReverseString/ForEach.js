function reverseString(str) {
  let revSrring = "";
  str.split("").forEach(function (char) {
    revSrring = char + revSrring;
  });
  return revSrring;
}
console.log(reverseString("Learning JavaScript"));
