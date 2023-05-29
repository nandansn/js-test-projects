//  What is module pattern?

/**
 * Module pattern is a design pattern used to wrap a set of variables and functions together in a single scope returned as an object. JavaScript doesn't have access specifiers similar to other languages(Java, Pythong etc) to provide private scope. It uses IIFE (Immediately invoked function expression) to allow for private scopes. i.e, a closure that protect variables and methods.
 */


let car = (function(name, model, year) {
   
    const display = () => console.log(name, model, year);

    return {
        name,
        model,
        displayDetails: display
    }

    
})("maruti", "alto", 2012);

car.displayDetails()
car.name = "bmw" // this will not chaneg the value

car.displayDetails()