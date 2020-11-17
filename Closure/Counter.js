let counter = (init = 0) => {
  let privateCounter = init;
  function changeBy(x) {
    privateCounter += x;
  }
  return {
    increment: function (x = 1) {
      changeBy(x);
    },
    decrement: function (x = -1) {
      changeBy(x);
    },
    value: function () {
      return privateCounter || "Null Value";
    },
  };
};

let count = counter(2);
let count2 = counter(2);
count.increment(5);
count.decrement();
console.log(count.value());
console.log(count2.value());
