const a = new Promise((resolve, reject) => {
  resolve(1);
});

class CustomPromise {
  constructor(action) {
    this.state = "PENDING";
    this.thenCallback = null;
    this.catchCallback = null;
    this.resolver = (data) => {
      this.state = "RESOLVED";
      this.thenCallback(data);
    };

    this.rejection = (data) => {
      this.state = "REJECTED";
      this.catchCallback(data);
    };

    this.customThen = (callback) => {
      this.thenCallback = callback;
      return this;
    };
    this.customCatch = (callback) => {
      this.catchCallback = callback;
    };

    action(this.resolver, this.rejection);
  }
}

const promise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.ceil(Math.random(1 * 1 + 6) * 6);
    if (rand > 2) {
      resolve("Success");
    } else {
      reject("Error");
    }
  }, 1000);
});

promise.customThen((data) => {
  console.log(data);
});

promise.customCatch((data) => {
  console.log(data);
});
