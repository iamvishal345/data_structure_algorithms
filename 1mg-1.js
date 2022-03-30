/**
 * @description Implement the last fullfilled promise
 */

function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

const tasksList = [task(1000), task(2000), task(3000)];

Promise.lastFullfilled = function (promises) {
  let complete = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then((data) => {
        complete++;
        if (complete === promises.length) {
          resolve(data);
        }
      });
      promise.catch((err) => {
        complete++;
        console.log(err);
      });
    });
  });
};

Promise.lastFullfilled(tasksList)
  .then((results) => console.log(results))
  .catch((error) => console.error(error));
