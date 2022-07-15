
function func(x){
    var z =8;
    return function(y){
        console.log(x+y+z);
    }
}

var n1= new Number(32);
var a1= func(n1);

var n2= new Number(16);
var a2= func(n2);

var n3= new Number(8);
var a3= func(n3);

var n4= new Number(4);
var a4= func(n4);

var n5= new Number(2);
var a5= func(n5);

a1(2);
a2(4);
a3(8);
a4(16);
a5(32);
