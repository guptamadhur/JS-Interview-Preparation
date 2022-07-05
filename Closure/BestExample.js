function outest() {
    var c = 20;
    function outer(b) {
        var i = 10;
        function inner() {
            console.log(a, b, c);
        }
        // var i =10; //works the same way 
        // let i =10; //works the same way as let is block scope
        return inner;
    }
    return outer;
}
let a = 100;
var close = outest()("Hello"); // outer()();
close();


// Exmaple 1: hiding and data encapsulation 
function counter(){
    var count = 0;
    return function increment(){
        count ++;
        console.log(count);
    }
}

var count1 = counter();
count1();
count1();

var count2 = counter();
count2();
count2();

// Exmaple 2: Better way Hiding and data encapsulation 
function betterCounter(){
    var count = 0;
    this.incrementCounter =  function(){
        count ++;
        console.log(count);
    }
    this.decrementCounter =  function(){
        count --;
        console.log(count);
    }
}

var counter1 = new betterCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
