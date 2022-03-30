var a = "hari";

const obj = {
  a: "vishal",
  fun() {
    console.log(this.a);
  },
};

let b = obj.fun;

b();
