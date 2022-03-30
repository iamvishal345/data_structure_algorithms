var firstUniqChar = function (s) {
  if (s.length === 0) return -1;
  let mapObj = new Map();
  for (let i = 0; i < s.length; i++) {
    if (mapObj.has(s[i])) {
      mapObj.set(s[i], false);
    } else {
      mapObj.set(s[i], i);
    }
  }
  for (value of mapObj) {
    if (value[1] !== false) return value[1];
  }
  return -1;
};

console.log(firstUniqChar("leetcode"));
