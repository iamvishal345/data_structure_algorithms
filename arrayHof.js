function customReduce(callback, initialVal) {
  let prevValue = initialVal;

  for (let i = 0; i < this.length; i++) {
    prevValue = callback(prevValue, this[i], i, this);
  }
  return prevValue;
}

if (!Array.prototype.customReduce) {
  Array.prototype.customReduce = customReduce;
}

const value = [1, 2, 3, 4].customReduce((acc, curr, index, arr) => {
  return acc + curr;
}, 0);

console.log({ value });

function customMap(callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
}

if (!Array.prototype.customMap) {
  Array.prototype.customMap = customMap;
}

const newArr = [1, 2, 3, 4, 5].customMap((value, index, arr) => {
  return value * index;
});

console.log(newArr);

function customFlat(arr, depth) {
  return arr.reduce((acc, curr) => {
    const isArray = Array.isArray(curr);
    return acc.concat(
      isArray && depth > 0 ? customFlat(curr, depth - 1) : curr
    );
  }, []);
}

if (!Array.prototype.customFlat) {
  Array.prototype.customFlat = function (depth = 3) {
    return customFlat(this, depth);
  };
}

console.log([1, 2, [3, 4, [5, 6, [7, [8, 9, 10]]]]].customFlat());
