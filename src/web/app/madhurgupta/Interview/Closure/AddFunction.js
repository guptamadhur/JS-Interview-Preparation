const makeAdder = (x) => {
  return function (y) {
    return x + y;
  };
};

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(10));
console.log(add10(10));
console.log(makeAdder(20)(10));
