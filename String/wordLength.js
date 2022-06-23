var words = ["the", "quick", "brown", "fox"];
// output wordLengths = [3, 5, 5, 3]  
 
const wordLengths = (words) => {
  let map1 = words.map(res => res.length());
  return map1;
}
