const option = () => {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
// option(); // 5 5 5 5 5 

// Option 1: to fix the issue :- As let have block scope
const optionWithLet = () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
optionWithLet(); // 0 1 2 3 4


// Option 2: closure
const optionWithoutLet = () => {
  for (let i = 0; i < 5; i++) {
    function func(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    func(i);
  }
}
optionWithoutLet(); // 0 1 2 3 4
