## Promise

### Basics

- A “producing code” that does something and takes time.
- A “consuming code” that wants the result of the “producing code” once it’s ready.
- A promise is a special JavaScript object that links the “producing code” and the “consuming code” together.

> let promise = new Promise(function(resolve, reject) {
> // executor (the producing code, "singer")
> });

- The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically.
- It contains the producing code which should eventually produce the result. In terms of the analogy above: the executor is the “singer”.

- Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

  - resolve(value) — if the job is finished successfully, with result value.
  - reject(error) — if an error has occurred, error is the error object.

- The promise object returned by the new Promise constructor has these internal properties:

  - state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
  - result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.

[Reference] (https://javascript.info/promise-basics)

#### Consumers

Consumers: then, catch

- A Promise object serves as a link between the executor (the “producing code”) and the consuming functions, which will receive the result or error. Consuming functions can be registered using the methods .then and .catch.

> promise.then(
> function(result) { /_ handle a successful result _/ },
> function(error) { /_ handle an error _/ }
> );

- The first argument of .then is a function that runs when the promise is resolved and receives the result.
- The second argument of .then is a function that runs when the promise is rejected and receives the error.

#### Cleanup: finally

- The call .finally(f) is similar to .then(f, f) in the sense that f runs always, when the promise is settled: be it resolve or reject.

- The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.

**Note** :

[Ref] https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke

FYI, when you know that a promise will always resolve or always reject, you can write Promise.resolve or Promise.reject , with the value you want to reject or resolve the promise with!
