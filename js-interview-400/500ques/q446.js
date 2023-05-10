// What are the possible side-effects in javascript?

/**
 * A side effect is the modification of state through the invocation of a function or expression. These side effects makes our function impure by default. Below are some side effects which makes function impure,

Making an HTTP request. Asynchronous functions such as fetch and promise are impure.
DOM manipulations
Mutating the input data
Printing to a screen or console: For example, console.log() and alert()
Fetching the current time
Math.random() calls: Modifies the internal state of Math object
 */