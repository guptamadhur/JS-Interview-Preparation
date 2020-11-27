Array.prototype.mymap = function (callback) {
  const resultArray = [];
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callback(this[index], index, this));
  }
  return resultArray;
};
const sample = [1, 2, 3, 4];
var output = sample.mymap((val, index, array) => {
  console.log(val, ":", index, ":", array);
  return val * 2;
});
