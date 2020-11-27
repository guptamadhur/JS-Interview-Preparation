let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
  setTimeout(() => reject(new Error("Whoops!")), 2000); // gettings ignored
});
promise.then(
  (result) => console.log(result), // shows "done!" after 1 second
  (error) => console.log(error) // doesn't run
);
