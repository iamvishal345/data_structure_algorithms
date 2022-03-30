function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(text);
    }, time);
  });
}

Promise.all([showText("first", 1000), showText("second", 2000)]).then(
  (data) => {
    console.log({ data });
  }
);
function customAll(promises) {
  const result = [];
  const complete = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then((data) => {
        result[index] = data;
        complete++;
        if (complete === promises.length) {
          resolve(result);
        }
      });

      promise.catch((err) => {
        // reject(err);
      });
    });
  });
}
