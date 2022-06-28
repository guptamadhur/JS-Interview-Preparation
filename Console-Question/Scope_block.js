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
