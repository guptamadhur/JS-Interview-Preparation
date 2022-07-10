console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });
console.log("script end");

/*
Reason: https://stackoverflow.com/questions/51728767/execution-order-of-timeout-and-promise-functionsmain-tasks-and-micro-tasks

o/p:
> "script start"
> "script end"
> "promise1"
> "promise2"
> "setTimeout"
*/
