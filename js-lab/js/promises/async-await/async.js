

function returnPromise() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("resolved...");
      resolve("done");
    }, 300);
  });
  return promise;
}

async function mainFunction() {
  console.log("Start");
  let result = await returnPromise();
  console.log("next ", result);
}

mainFunction();
