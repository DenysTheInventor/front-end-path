setTimeout(() => {
    console.log("setTimeout");
  }, 0);
  const promise = new Promise((resolve) => {
    console.log("Promise");
    resolve();
  });
  promise.then(() => {
    console.log("Promise resolve");
  });
  console.log("End");

// Макро:
// console.log("Promise")
// console.log("End")

// Микро:
// console.log("Promise resolve")

// Callback queue:
// console.log("setTimeout")