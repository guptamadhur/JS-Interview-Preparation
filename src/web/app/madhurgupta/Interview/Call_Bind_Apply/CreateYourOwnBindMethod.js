let name = {
    firstname: "Madhur",
    lastname: "Gupta"
}

let name2 = {
    firstname: "AG",
    lastname: "Gupta"
}

let printName = function(city, state){
    console.log(this.firstname + " " + this.lastname+ " from "+ city + ", " + state)
}

// Function borrowing
printName.call(name, "Mumbai", "MH");
printName.call(name2, "Delhi", "Delhi");

// Diff Apply accpets Array List of arguments 
printName.apply(name2, ["New York", "USA"])

//Bind does not call the method directly but it returns a function itself
let printNameBind = printName.bind(name, "Germany", "Munich");
printNameBind();
