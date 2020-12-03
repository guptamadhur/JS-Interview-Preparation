window.age = 10;
function Person() {
  this.age = 42;
  setTimeout(() => {
    console.log("this.age", this.age);
  }, 100);
}

var p = new Person();
// 10
// this.age 42

window.age = 10;
function Person() {
  this.age = 42;
  setTimeout(function () {
    console.log("this.age", this.age);
  }, 100);
}

var p = new Person();
// 10
// this.age 10
