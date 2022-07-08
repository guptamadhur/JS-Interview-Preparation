const clock = () => {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let time = hours + " : " + min + " : " + sec;
  console.log(time);
  //document.getElementById("clock").innerHTML = time;
};

setInterval(() => {
  clock();
}, 1000);
