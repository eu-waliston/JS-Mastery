//synchronous vs asynchronous code
console.log("Synchronus 1");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data back from the server");
    }, 3000);
  
    setTimeout(() => {
      reject("failed do get data from the server");
    }, 2000);
  });
  
  promise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("done");
    });
console.log("Synchronus 2");
   