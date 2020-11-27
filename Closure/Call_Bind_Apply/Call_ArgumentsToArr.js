let argsToArr = function () {
  console.log(arguments);
  //Convert arguments to Array
  console.log([].slice.call(arguments));
};
argsToArr(1, 2, 3);
