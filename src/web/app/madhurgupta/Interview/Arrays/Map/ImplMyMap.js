/*

Impl map functionality 

Cons:

*/

let arr = [1, 2, 3, 4]

Array.prototype.mymap = function(callback){
    let newAr = [];
    for(let i=0; i< this.length; i++){
       newAr.push(callback(this[i]));
    }
    return newAr;
  }
  