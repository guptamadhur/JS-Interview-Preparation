String.prototype.rev = function () {
  return Array.from(this).reverse().join("");
};
console.log("ABC".rev());
