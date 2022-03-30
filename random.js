const arr = [0, 1, 2, 3, 4];

const randomize = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr.length);

  for (let i = 0; i < arr.length; i++) {
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    randomIndex = Math.floor(Math.random() * arr.length);
  }
  return arr;
};

function printNumbers(arr) {
  const newArr = randomize(arr);

  newArr.forEach((val) => {
    console.log(val);
  });
}

printNumbers(arr);
