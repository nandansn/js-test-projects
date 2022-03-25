## Async

### Synchronous

- JS is single threaded, synchronous language

### Recipe Example

#### Soup Making Example

- Make soup
    - chop onion
    - chop carrots
    - boli water 10 min
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