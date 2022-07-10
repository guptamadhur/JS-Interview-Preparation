const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const spiral = (matrix) => {
  const arr = [];
  while (matrix.length) {
    arr.push(
      ...matrix.shift(),
      ...matrix.map((a) => a.pop()),
      ...matrix.pop().reverse(),
      ...matrix.map((a) => a.shift()).reverse()
    );
  }
  return arr;
};

var spiralTraversal = function (matriks) {
  var result = [];
  var goAround = function (matrix) {
    if (matrix.length == 0) {
      return;
    }
    // right
    result = result.concat(matrix.shift());

    // down
    for (var j = 1; j < matrix.length - 1; j++) {
      result.push(matrix[j].pop());
    }

    // bottom
    result = result.concat(matrix.pop().reverse());

    // up
    for (var k = matrix.length - 2; k > 0; k--) {
      result.push(matrix[k].shift());
    }

    return goAround(matrix);
  };
  goAround(matriks);
  return result;
};

console.log(spiralTraversal(input));
//console.log(spiral(input));
