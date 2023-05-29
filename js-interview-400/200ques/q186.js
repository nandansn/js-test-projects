// What happens if you do not use rest parameter as a last argument

/**
 * The rest parameter should be the last argument, as its job is to collect all the remaining arguments into an array. For example, if you define a function like below it doesn’t make any sense and will throw an error.
 */

function someFunc(a,…b,c){
//You code goes here
return;
}

// caught SyntaxError: Rest parameter must be last formal parameter