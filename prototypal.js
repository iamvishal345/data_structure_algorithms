const F = function () {
  this.a = 1;
  this.b = 2;
};
F.prototype = { b: 3, c: 4 };
const o = new F();

console.log(o.__proto__.__proto__);
