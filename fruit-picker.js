/// difficult 😯😑🤔

// import { notify } from "./notifier";
// import { order } from "./grocer";

function onSuccess() {
  return notify({ message: "SUCCESS" });
}

// console.log(onSuccess());

///---///

function onError() {
  return notify({ message: "ERROR" });
}

// console.log(onError());

///---///

// const query = {
//   variety: string,
//   quantity: number
// };

function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  return order(query, onSuccessCallback, onErrorCallback);
}

// orderFromGrocer(
//   { variety: "pear", quantity: 12 },
//   exampleSuccessCallback,
//   exampleErrorCallback
// );
