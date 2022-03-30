const obj1 = {
  a: 5,
  printA() {
    console.log(this.a);
  },
};

const obj2 = {
  a: 7,
};
obj1.printA.bind(obj2)();

const customBind = function (context) {
  const fun = this;
  return function (...args) {
    fun.apply(context, [...args]);
  };
};

obj1.printA.apply(obj2);

const customApply = function (context, [...args]) {
  const fun = this;
  context.fnRef = fun;
  context.fnRef([...args]);
};
