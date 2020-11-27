function reverseString(str) {
  let strn = "";
  for (let char of str) {
    strn = char + strn;
  }
  return strn;
}
console.log(reverseString("Learning JavaScript"));
