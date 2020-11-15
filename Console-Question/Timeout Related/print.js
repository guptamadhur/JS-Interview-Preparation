const print = () => {
  console.log(1);
  setTimeout(() => console.log(2), 0);
  setTimeout(() => console.log(3), 0);
  console.log(4);
};
print();
//  Ans:1,4,2,3
