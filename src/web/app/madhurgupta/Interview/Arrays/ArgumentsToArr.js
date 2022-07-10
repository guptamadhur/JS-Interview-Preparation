let argsToArr = function () {
  console.log(arguments);
  //Convert arguments to Array
  console.log([].slice.call(arguments));
};
argsToArr(1, 2, 3);

/*
o/p:

[Arguments] { '0': 1, '1': 2, '2': 3 }
[ 1, 2, 3 ]
*/

var arr = [ 1, 2, 3 ]
console.log(arr.slice(3))
console.log(arr.slice(1))

/*
o/p:
[]
[2, 3]
*/