const option = () => {
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
// option(); // 5 5 5 5 5 

const optionClosureFix = () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
optionClosureFix(); // 0 1 2 3 4
