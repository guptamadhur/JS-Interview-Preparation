const words = ["god", "dog", "odg", "dell", "ledl", "abc", "cba", "boo"];

const sortStrChars = (str) => {
  if (!str) {
    return;
  }
  return str.split("").sort().join("");
};

const getGroupedAnagrams = (words) => {
  const anagrams = {};
  words.forEach((word) => {
    const sortedWord = sortStrChars(word);
    if (anagrams[sortedWord]) {
      return anagrams[sortedWord].push(word);
    }
    anagrams[sortedWord] = [word];
  });
  return anagrams;
};
const groupedAnagrams = getGroupedAnagrams(words);
for (const sortedWord in groupedAnagrams) {
  console.log(sortedWord, groupedAnagrams[sortedWord].toString());
}
