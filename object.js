const obj1 = { a: 3, b: 5, c: 6, d: { f: 4, g: 5 } };
const obj2 = { b: 33, d: 52, e: 63 };

console.log(Object.assign({}, obj1, obj2));

Object.customAssign = (target, ...args) => {
  args.forEach((obj) => {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) target[key] = obj[key];
    }
  });
  return target;
};

console.log(Object.customAssign({}, obj1, obj2));

const deepCopy = (target, source) => {
  if (!source) return;
  for (const key in source) {
    if (Object.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === "object") {
        target[key] = {};
        deepCopy(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
};
console.log(deepCopy({}, obj1));
obj1.d.f = 3456;
console.log(obj1);
