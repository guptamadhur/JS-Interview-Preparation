// https://javascript.info/currying-partials
// https://codeinterview.io/YAORADJLWO

const curry = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
};

const sum = (a, b, c) => {
  return a + b + c;
};

let curriedFunction = curry(sum);

console.log(curriedFunction(1, 2, 3, 4)); // 6, still callable normally
console.log(curriedFunction(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedFunction(1)(2)(3)); // 6, full currying
console.log(curriedFunction(1, 2)(3, 4)); // 6, full currying
console.log(curriedFunction(1)(2)(3, 4)); // 6, full currying
