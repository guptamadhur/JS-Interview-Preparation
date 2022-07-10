function reverseString(str) {
  let stringRev = "";
  for (let i = 0; i < str.length; i++) {
    stringRev = str[i] + stringRev;
  }
  return stringRev;
}
console.log(reverseString("Hello World!"));
