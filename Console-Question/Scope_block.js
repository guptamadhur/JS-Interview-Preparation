(function() {
    console.log(a) // undefined 

    if(true) {
        var a = 'a';
    }
    console.log(a) // a
    
    console.log(b); // Error

    const bar = () => {
        var b = 'b';
        console.log(b); // b
    }
    bar();
})()

console.log(b); // Error


var xd = [...[1, 2, 3]];
var xd = "Madhur" 
console.log(xd);
/*
o/p:
> Madhur
*/

let xs = [...[1, 2, 3]];
let xs = "Madhur" // SyntaxError: Identifier 'xe' has already been declared
/*
o/p:
> SyntaxError: Identifier 'xe' has already been declared
*/
