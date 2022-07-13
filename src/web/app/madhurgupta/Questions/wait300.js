/*
Love Bonito

Write a JS code to impliment this

wait(300);

*/

const wait = (delayTime) =>{
    return new Promise((res, reject)=>{
        setTimeout(() => {res()}, delayTime);
      });
  }
  
  (async function (){
      await wait(3000);
    console.log("in await");
  })()
  