## Async

### Synchronous

- JS is single threaded, synchronous language

### Recipe Example

#### Soup Making Example

- Make soup
    - chop onion
    - chop carrots
    - boil water 10 min
    - add carrots boil for 5 mins
    - add onion boil for 5 mins

### Asynchronous

- we can use browser methods like setTimeout to handle the asynchronous


### call back

### call back hell

### Promises



- Pending
- Resolved
- Rejected

- You need to pass call back function into Promise constructor, then you need to pass 2 functions as args into the callback function
    > new Promise(() => {}) // remember we are declaring it
    > new Promise((resolve, reject) => {})
    - imagine you are making an API call, api may return success or failure, so with in the call back function of promise constructor, if api success then call resolve with arg like resolve('success')
    else 
    failure then call reject with arg like reject('failure')

- resolve and reject will be called using promise reference, promise.then((data) => {
    console.log(data) // data is from the resolve
}).catch((err) => {
    console.log(err) // error is from reject
})

- The Promise constructor takes a function (an executor) that will be executed immediately and passes in two functions: resolve, which must be called when the Promise is resolved (passing a result), and reject, when it is rejected (passing an error).

- [Reference](https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/)

### Async/Await

- The async keyword before a function has two effects:

- Makes it always return a promise.
- Allows await to be used in it.
- The await keyword before a promise makes JavaScript wait until that promise settles, and then:

- If it’s an error, an exception is generated — same as if throw error were called at that very place. Otherwise, it returns the result. Together they provide a great framework to write asynchronous code that is easy to both read and write.

- With async/await we rarely need to write promise.then/catch, but we still shouldn’t forget that they are based on promises, because sometimes (e.g. in the outermost scope) we have to use these methods. Also Promise.all is nice when we are waiting for many tasks simultaneously.