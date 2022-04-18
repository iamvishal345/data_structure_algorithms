const addTo80 = (n) => {
  console.log("long time");
  return n + 80;
};

const memoizedAddTo80 = () => {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
};
const memoized = memoizedAddTo80();
// console.log("1", memoized(5));
// console.log("2", memoized(5));
let calculations = 0;
const fibonacciDynamic = () => {
  let cache = {
    0: 1,
    1: 1,
    2: 1,
  };
  const fibonacciHelper = (index) => {
    calculations++;
    if (index in cache) {
      return cache[index];
    } else {
      if (index < 2) {
        return index;
      } else {
        cache[index] = fibonacciHelper(index - 1) + fibonacciHelper(index - 2);
        return cache[index];
      }
    }
  };
  return fibonacciHelper;
};

const fasterFib = fibonacciDynamic();
console.log("DP", fasterFib(100));
console.log("We did", calculations, "calculations");
