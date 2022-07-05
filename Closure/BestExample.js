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

