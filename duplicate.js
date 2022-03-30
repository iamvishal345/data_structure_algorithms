const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5, 6];

const removeDuplicate = (arr, n) => {
  if (n === 0 || n === 1) return n;

  let j = 0;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArr[j] = arr[i];
      j++;
    }
  }

  return newArr;
};

console.log(removeDuplicate(arr, arr.length));
