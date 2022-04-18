//return all anagrams
const words = ["dell", "ledl", "abc", "cba", "boo", "oob"];

const findAllAnagrams = (words) => {
  const pairs = {};
  let sortedWord;
  for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
    sortedWord = words[i].split("").sort().join("");
    if (pairs[sortedWord]) {
      pairs[sortedWord].push(words[i]);
    } else {
      pairs[sortedWord] = [words[i]];
    }
  }

  return Object.values(pairs).filter((data) => data.length > 1);
};

console.log(findAllAnagrams(words));
