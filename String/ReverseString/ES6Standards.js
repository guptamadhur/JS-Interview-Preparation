function reverseString(str) {
  let revSrring = "";
  str.split("").forEach((char) => (revSrring = char + revSrring));
  return revSrring;
}
console.log(reverseString("Learning JavaScript"));
