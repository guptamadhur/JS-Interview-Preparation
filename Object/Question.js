/*
Define a generic object query function - queryMe, which will take two
parameters an object and a dot separated string.
Sample expression
var a = {
b: 5,
d: {
c: 6,
e: {
q: 3
}
}
};

b 5
d.c 6
e.q 3

*/

function index(obj, i) {
  return obj[i] ? obj[i] : "undefined";
}
const queryMedia = (obj, str) => {
  return str.split(".").reduce(index, obj);
};

const queryMedia1 = (obj, str) => {
  return str.split(".").reduce((acc, current) => {
    return acc[current] ? acc[current] : "undefined";
  }, obj);
};

console.log(queryMedia1(a, "b")); // 5
console.log(queryMedia1(a, "d.c")); // 6
console.log(queryMedia1(a, "x.y.z")); // undefined
console.log(queryMedia1(a, "d.e")); // {q: 3}

/*
i/p:
queryMedia(a, 'b'); // 5
queryMedia(a, 'd.c'); // 6
queryMedia(a, 'x.y.z'); // undefined
queryMedia(a, 'd.e'); // {q: 3}

o/p:

*/
