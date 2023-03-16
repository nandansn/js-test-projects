### IIFE

- Immediately Invokfed Function Expression
- This is older approach, Now modules are used.
- Simple approach to avoid global scope pollution
- good way to protect the scope of your function and variables within it.

#### Exe

> create iife
>
> create iife with args
>
> create iife args and return

### Hoisting

- Function and var declarations are hoisted
- safer to access only after initialized is good practice

#### EXE

> create var, let, const and apply hoisting. remember how compiler and interpreter works
>
> create function hoisting

### Closure

- gives you an access to outer function's scope from inner function
- make private variables with closures
- create inner function and return it, function can return function
- you can use object and set the function property and return multiple functions

#### EXE

> create closure to show account balance, deposit, withdraw check limit. pass name, initial balance
>
> to outer function and create balance variable in the outer function



### What is a first class function
- In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

- For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener

> const handler = () => console.log("This is a click handler function");
>
> document.addEventListener("click", handler);
>


### What is a first order function
- First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

> const firstOrder = () => console.log("I am a first order function!");


# What is a higher order function

- Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

> const firstOrderFunc = () =>
>
>  console.log("Hello, I am a First order function");
>
> const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
> higherOrder(firstOrderFunc);
>


### What is a unary function
- Unary function (i.e. monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function.

- Let us take an example of unary function,

> const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value

### What is the currying function
- Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. - Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function.

- Let's take an example of n-ary function and how it turns into a currying function,

> const multiArgFunction = (a, b, c) => a + b + c;
>
> console.log(multiArgFunction(1, 2, 3)); // 6
>
> const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
>
> curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
>
> curryUnaryFunction(1)(2); // returns a function: c => 3 + c
>
> curryUnaryFunction(1)(2)(3); // returns the number 6

- Curried functions are great to improve code reusability and functional composition.

### What is a pure function
- A Pure function is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.

- Let's take an example to see the difference between pure and impure functions,

> //Impure
>
> let numberArray = [];
>
> const impureAddNumber = (number) => numberArray.push(number);
>
> //Pure
>
> const pureAddNumber = (number) => (argNumberArray) =>
>
>  argNumberArray.concat([number]);
>
>//Display the results
>
> console.log(impureAddNumber(6)); // returns 1
>
> console.log(numberArray); // returns [6]
>
> console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
>
> console.log(numberArray); // returns [6]
>
- As per the above code snippets, the Push function is impure itself by altering the array and returning a push number index independent of the parameter value. . Whereas Concat on the other hand takes the array and concatenates it with the other array producing a whole new array without side effects. Also, the return value is a concatenation of the previous array.


### What is IIFE(Immediately Invoked Function Expression)
IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

(function () {
  // logic here
})();
The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,

(function () {
  var message = "IIFE";
  console.log(message);
})();

Remember that Pure functions are important as they simplify unit testing without any side effects and no need for dependency injection. They also avoid tight coupling and make it harder to break your application by not having any side effects. These principles are coming together with Immutability concept of ES6 by giving preference to const over let usage.

### What is memoization

- Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache. Let's take an example of adding function with memoization,

const memoizAddition = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("Fetching from cache");
      return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
    } else {
      console.log("Calculating result");
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  };
};
// returned function from memoizAddition
const addition = memoizAddition();
console.log(addition(20)); //output: 40 calculated
console.log(addition(20)); //output: 40 cached

### Pure Function:

[Ref] (https://blog.greenroots.info/what-are-pure-functions-and-side-effects-in-javascript)

