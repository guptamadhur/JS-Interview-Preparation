
let add = function (c) {
  console.log(this.a + this.b + c);
};

let obj = {
  a: 1,
  b: 2,
};

add.call(obj, 3);
//6
