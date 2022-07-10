

const xx = [1, 2, 3];
xx[-1] = -1; 
console.log(xx[xx.indexOf(1000)]); //o/p: -1 else undefined 
console.log(xx[xx.indexOf(-8)]);  //o/p: -1 else undefined 


//let i = ?
let i = Number.MIN_VALUE;
console.log(i);
console.log(i * i);
console.log(i + 1);
console.log(i - 1);
console.log(i / i);
/*
o/p:
> 5e-324
> 0
> 1
> -1
> 1
*/


let x = [1, 2, 3] + [3, 4, 5];
console.log(x);
/*
o/p:
> "1,2,33,4,5"
*/


let xe = [...[1, 2, 3], ...[3, 4, 5]];
console.log(xe);
/*
o/p:
> Array [1, 2, 3, 3, 4, 5]
*/
