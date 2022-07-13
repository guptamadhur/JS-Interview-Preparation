// Functions Statements/  Functions Decalaration:
// hoisted and initlalised  
a()
function a() {
    console.log("a")
}


// Functions Expressions:
// is hoisted but not defined 

// aa(); // TypeError: aa is not a functio 
var aa = function () {
    console.log("b")
}
aa();


// Anonymous Functions 
// function (){

// }


// Named Functions Expression
var ac = function cc() {
    console.log("b")
}
// cc(); // ReferenceError 


// Diff btw Paramters & Arguments
var ad = function (dd, de) { //paramters
    console.log("d")
}
ad(3, 4) //arguments


// First Class Functions 
// Ability to be used as a value
// function passing inside a function


// Arrow Functions 
var dd = () => {
    console.log("ee")
}

