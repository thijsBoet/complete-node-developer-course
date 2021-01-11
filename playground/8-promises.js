const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1, 5, 7])
    reject("This is an error");
  }, 2000)
});

doWorkPromise.then((result) => {
  console.log("Succes: ", result)
}).catch((error) => {
  console.log("Error: ", error)
})