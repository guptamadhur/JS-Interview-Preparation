/*
Count Derangements (Permutation such that no element appears in its original position)

https://www.geeksforgeeks.org/count-derangements-permutation-such-that-no-element-appears-in-its-original-position/

Example:

Input: n = 2
Output: 1
For two elements say {0, 1}, there is only one 
possible derangement {1, 0}

Input: n = 3
Output: 2
For three elements say {0, 1, 2}, there are two 
possible derangements {2, 0, 1} and {1, 2, 0}

Input: n = 4
Output: 9
For four elements say {0, 1, 2, 3}, there are 9
possible derangements {1, 0, 3, 2} {1, 2, 3, 0}
{1, 3, 0, 2}, {2, 3, 0, 1}, {2, 0, 3, 1}, {2, 3,
1, 0}, {3, 0, 1, 2}, {3, 2, 0, 1} and {3, 2, 1, 0}


countDer(n) = (n - 1) * [countDer(n - 1) + countDer(n - 2)]

*/

const countDer = (n)=>{
    if(n==1 || n ==2){
        return n-1;
    }
    let a=0, b=1;
    for(let i =3; i<=n;i++){
        let cur =(i-1)*(a+b);
        a=b;
        b= cur;
    }
    return b;
}

console.log("1: ", countDer(1));
console.log("2: ", countDer(2));
console.log("4: ", countDer(4));

