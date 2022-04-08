const closure = () => {
  let num = 0;
  return () => {
    num += 1;
    if (num % 3 === 0) {
      return num + " Vishal Sharma";
    }

    return num;
  };
};

let inner = closure();
console.log(inner());
console.log(inner());
console.log(inner());

const obj1 = {
  a: 10,
  print(a, b) {
    console.log(this.a, a, b);
  },
};

// obj1.print();

const obj2 = {
  a: 30,
};

const c = obj1.print.bind(obj2);

Function.prototype.customBind = function (obj, ...bindargs) {
  const ref = this;
  obj.ref = ref;
  return obj.ref(...[...bindargs]);
};

obj1.print.customBind(obj2, 10, 20);

const a = {
  p1: 2,
  p2: { np1: 0, np2: 1 },
};

const deepcopy = (target, source) => {
  if (!source) return;
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === "object") {
        target[key] = {};
        deepcopy(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
};

console.log(deepcopy({}, a));

const sum = (...mainArgs) => {
  return (...args) => {
    if (args.length) {
      return sum(...mainArgs, ...args);
    } else {
      return mainArgs.reduce((acc, curr) => acc + curr, 0);
    }
  };
};

console.log(sum(1, 2, 3)(4, 5)(8, 9, 9)(2, 0)());
