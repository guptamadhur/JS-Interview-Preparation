// Remove duplicates from Array
let a = [1, 2, 5, 2, 1, 8];

// Method 1: Brute-Force
let b = [];
for (let i = 0; i < a.length; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}
console.log(b);
// o/p: [1, 2, 5, 8]
// Complexity O(n^2)

// -------------------------------------------------------------------

// Method 2: Object to Array
let obj = {};
for (let i of a) {
  obj[i] = true;
}
console.log(obj);
b = Object.keys(obj);
console.log(b);
/*
o/p: {1: true, 2: true, 5: true, 8: true}
     ["1", "2", "5", "8"]
Complexity O(n)
*/

// -------------------------------------------------------------------

// Method 3: Using Set (Best Way)
console.log([...new Set(a)]);
/*
o/p: [1, 2, 5, 8]
Complexity O(n)
*/
