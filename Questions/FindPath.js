/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
    
    https://leetcode.com/playground/LhwrauHo

*/

var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (obj, path) => {
    const _list = path.split('.');
    const notNullObj = Object.keys(obj).length;
    let copyObj = { ...obj };
    
    for(let res = 0 ; res < _list.length; res++){
        let val = _list[res];
        if(copyObj != undefined && copyObj.hasOwnProperty(val)){
            copyObj = copyObj[val];
        }else{
            copyObj = undefined;
            break;
    }
    }
    return copyObj;
};


console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null
