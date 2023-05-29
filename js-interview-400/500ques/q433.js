// What is function execution context?

/**
 * Just like functions/modules/packages allow you to manage the complexity of writing code, Execution Contexts allow the JavaScript engine to manage the complexity of interpreting and running your code.
 * 
 * 
 * The first Execution Context that gets created when the JavaScript engine runs your code is called the "Global Execution Context". Initially this Execution Context will consist of two things - a global object and a variable called this. this will reference the global object which will be window if you're running JavaScript in the browser or global if you're running it in a Node environment.
 * 
 * Execution Context has two separate phases, a Creation phase and an Execution 
 * 
 * In the Global Creation phase, the JavaScript engine will

    1) Create a global object.
    2) Create an object called "this".
    3) Set up memory space for variables and functions.
    4) Assign variable declarations a default value of "undefined" while placing any function declarations in memory.

    It's not until the Execution phase where the JavaScript engine starts running your code line by line and executing it.

    Whenever a Function Execution Context is created, the JavaScript engine will


    1. Create an arguments object.

    2. Create an object called this.

    3. Set up memory space for variables and functions.

    4. Assign variable declarations a default value of "undefined" while placing any function declarations in memory.


    In reality, the JavaScript engine creates what's called an "Execution Stack" (also known as the "Call Stack"). Anytime a function is invoked, a new Execution Context is created and added to the Execution Stack. Whenever a function is finished running through both the Creation and Execution phase, it gets popped off the Execution Stack. Because JavaScript is single threaded (meaning only one task can be executed at a time),

    Global Execution Context , Function Execution Context, Hoisting, Scop Chaining


    [reference]: (https://dev.to/tylermcginnis/the-ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript-4bih)
 */