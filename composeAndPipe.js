//Polyfill for compose method
function addFive(a) {
  return a + 5;
}

function subtractTwo(a) {
  return a - 2;
}

function multiplyFour(a) {
  return a * 4;
}

const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((acc, curr) => {
      return curr(acc);
    }, args);
  };
};

const pipe = (...functions) => {
  return (args) => {
    return functions.reduce((acc, curr) => {
      return curr(acc);
    }, args);
  };
};

const evaluateWithPipe = pipe(addFive, subtractTwo, multiplyFour);

const evaluateWithCompose = compose(addFive, subtractTwo, multiplyFour);

console.log({
  evaluateWithPipe: evaluateWithPipe(5),
  evaluateWithCompose: evaluateWithCompose(5),
});
