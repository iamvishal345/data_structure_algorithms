const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data");
  }, 3000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data");
  }, 3000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error");
  }, 1000);
});

customPromiseAll = (promises) => {
  const result = [];
  let rejected = 0;
  let complete = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((p, i) => {
      p.then((data) => {
        result[i] = data;
        complete++;
        if (complete === promises.length) {
          resolve(result);
        }
      });
      p.catch((err) => {
        result[i] = err;
        complete++;
        rejected++;
        console.log("AGain", err, rejected, promises.length, complete, result);
        if (rejected === promises.length) {
          reject(result);
        }
        if (complete === promises.length) {
          resolve(result);
        }
      });
    });
  });
};

customPromiseAll([p1, p2, p3, p4])
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => console.log(err));
