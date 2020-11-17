const initHello = () => {
  var name = "Hello World!"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
};
initHello();

function init() {
  var name = "Hello World 2!"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  return displayName;
}
let myFunc = init();
myFunc();
