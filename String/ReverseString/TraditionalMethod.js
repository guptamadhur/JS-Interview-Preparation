const reverseString = (str) => [...str].reverse().join("");
console.log(reverseString("ABC"));

/*First, use Array.from() to turn a string into an array, then Array.prototype.
reverse() to reverse the array, and then Array.prototype.join() to make it back a string.*/
const reverse = (str) => Array.from(str).reverse().join("");
console.log(reverse("ABC"));
