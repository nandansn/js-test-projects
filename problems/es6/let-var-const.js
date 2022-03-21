let letName = 'nanda'; // define
letName = 'kumar'; // update
 // let letName = 30; // redefine not allowed

 const days = ['m','t','w']; // define
 // days = [] // updated not allowed
 // const days = ['t','f','s']; // redefine not allowed

 var vName = 'variable name' // define
 vName = 30; // update
 var vName = true; // re-define



//  Scope

// let and const block scope, var function scope


// let and const block scope life of let and const will be with in the {}

let l_scope = 'global let'
console.log(l_scope);

{
    let l_scope = 'block let'
    console.log(l_scope);
}
console.log(l_scope);

if (true) {
    let l_scope = 'if block let'
    console.log(l_scope);
}
console.log(l_scope);

(function letScope() {
    let l_scope = 'function block let'
    console.log(l_scope);
}());


console.log(l_scope);


// var function scope

var v_scope = 'global var'
console.log(v_scope);

{
    var v_scope = 'block var'
    console.log(v_scope);
}
console.log(v_scope);

if (true) {
    var v_scope = 'if block var'
    console.log(v_scope);
}
console.log(v_scope);

(function letScope() {
    var v_scope = 'function block var'
    console.log(v_scope);
}());


console.log(v_scope);
