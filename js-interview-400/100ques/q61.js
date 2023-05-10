// What are the main rules of promise

/*

A promise must follow a specific set of rules:

A promise is an object that supplies a standard-compliant .then() method
A pending promise may transition into either fulfilled or rejected state
A fulfilled or rejected promise is settled and it must not transition into any other state.
Once a promise is settled, the value must not change.

*/