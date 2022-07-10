const arr = [1,2,3,1,2,3,4,5,5,4]
 
let map2 = new Set();

// Option 1:
let abc = arr.map(res =>{map2.add(res);
})

// Option 2:
for(let element of arr){
  map2.add(element)
}

// Option 3:
[...new Set(arr)]
