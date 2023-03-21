let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 promise");
  }, 1000);
});

p1.then((data) => console.log(data));

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2");
  }, 1000);
});

Promise.all([p1, p2]).then((data) => console.log(data));

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p3 error");
  }, 2000);
});

Promise.all([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
