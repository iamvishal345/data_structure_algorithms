let arr = [9, 5, 8, 3];

let insertionSort = (inputArr) => {
  let length = inputArr.length;
  for (let i = 1; i < length; i++) {
    let key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j];
      j = j - 1;
      console.log(inputArr);
    }
    inputArr[j + 1] = key;
  }
  return inputArr;
};

console.log(insertionSort(arr));
