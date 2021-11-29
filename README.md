# js-test-projects

JS Test Lab:

VS: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf

Inline JS: Inline very specific to the element

example: <button onclick="alert('hello world')">Click me</button>

Internal JS: JS functionality applied to group of elements in that particular page

example:
<script>
document.querySelectorAll('.btn').forEach((button) => {
button.addEventListener('click', (e) => {
alert('awesome' + e.target.innerText);
});
});
</script>

External JS: JS functionality applied to all of the pages. for example to display the time across the page. Keeping the script in external js file.

let now = () => {
alert(new Date().getDate());
};

document.querySelectorAll('.time').forEach((btn) => {
btn.addEventListener('click', () => {
now();
});
});

String:
'', "", ``

Numbers:
in the console log, if you see the value color '5' as black then it is string type, usually number color will be blue.
+=, -=, \*=, /=, ++. --, %

Implicit Type Conversion:
10+'23' => 1023 string value
you can use parser like parseInt or parseFloat to get the number value fro string

Data Types - 7
Primitive - String, Number, Boolean, Null, Undefined, Symbol
Object - Arrays, Functions, Objects

typeof

Arrays - [], 0 - index based.

we can store different data types => const family = ['nanda','kumar',12,13.5,null,undefined]

Function:
reuse
function keyword
declaration and invoke
function hello() {

    }
    hello();

Function param and args
params - when declare/define - these are called placeholders, local vars
args - when u call/invoke
function hello(param) {

    }
    hello(arg);

Functions return:
default return is undefined, shortcuts, ignores after

Function expression:
we can add name or ignore it

    const add = function addValue(a,b) {
    	return a + b;
    }

    const sum = function (a,b) {
    	return a + b;
    }
    without name called anonymous function

Objects
key/value pair, methods
dot notation

    const person = {
    	fname:'nanda',
    	age:40,
    	education:true,
    	wife:'sanmathi',
    	family:['nivrithi'],
    	info: function() {
    		console.log('my name is Nanda')
    	},

    	// in ES6
    	greet2() {
    		console.log('my name is Nanda')
    	}
    }

Conditional Statements:
<, >, >=, <=, ==, ===, !=, !===

    == or ===

    == => check only value
    === => check value and type

Logical Operators:
|| - OR, && - AND, !

Switch:
switch (key) {
case value:

break;

default:
break;
}

Loops: repeatedly run a block of code while condition is tru
do while
code block first condition second
runs atleast once
while
condition is first
for
initiate, condition, increment

==============================================================================================================================================

String properties and Methods:
when u assign the string value, wrapper String object will be created, this object contains the methods.

Template literals:
ES6+

    Backtick characters - ``
    Interpolation ${} - insert expression (value)

Array Properties and Methods

    length
    concat 2 arrays
    	use concat()
    to reverese
    	use reverse()
    to add at the begin
    	use unshift()
    to add at the last
    	use push()
    to remove at the first
    	use shift()

    to remove at the last
    	use pop()

    splice - mutates original array, useful in react. removes the specified items
    	splice(starting point,howmany items)

Reference Vs Value:

    Primitive:
    	When assigning primitive data type value to a variable any changes are made directly to that value, without affecting the original value

    Object:
    	When assigning non-primitive data type value to a variable is done by reference so any changes will affect all the refrences.

Null and Undefined:

    both represent "no value"
    undefined: javascript cannot find valuefor this

    variable without value
    missing function arguments
    missing object properties

    2 + null => 2 null i considered as zero here
    2 + undefined => NaN

Truthy and Falsy:

    Falsy:
    	"", '', ``, 0, -0, NaN, false, null, undefined // note only -0 not -1 or -2 etc

Unary operator:
typeof 'nanda'

Binary operator:
let a = c + d

Ternary
condition

    1? true: false

Global Scope:
any variable ouside code block {} is said to be in global scope
can be accessed anywhere in the program
gotchas: name collisions, modify by mistake

Local Scope:
cannot be accessed outside the fucntion.
let is block scope
var is function scope

    {
    	name = 'global nanda'  added to global scope
    	let age = 40; this block scope, we can't access out side the block
    }

    function test () {
    	let name = 'nanda'

    	if (true) {
    		let name = 'kumar'
    		console.log(name) // kumar
    	}

    	console.log(name) // nanda
    }

    test();

    console.log(name) // global nanda

Variable Look up: 1. check in local function scope 2. check in global scope  
 3. looks outside

Call Back Functions, Higher Order Functions, Funtions are first class objects:

    Functions are first class objects:
    	1. Stored in a variable (expression)
    	2. passed as an argument to another function
    	3. return from the function

    Higher Order Functions:
    	function accepts as an argument or returns another function as a result

    Call Back Function:
    	function that passed to another function as an argument and executed inside that function.

Array Iterators
Array methods uses Higher order functions and call back functions heavily,
Powerful array methods,
forEach, map, filter, find, reduce => these methods would be really helpful while learning react.

    Accept CALLBACK function as an argument, calls Callback function against each item in a array. Reference Item in the Callback Parameter.

    forEach:	does not return an y new array.

    map : does return a new array, does not change the size of original array, uses values of original array when making new one.
    Rule:
    	1. call back function should return the value
    	2. you should not change the original array property or value

    When this will be useful in the real time? while building ui components list of items like that

    filter: does return a new array.
    can manipulate the size of new array
    returns based on condition.

    find:	returns object,
    returns first match, if no match undefined will be returned
    great for getting unique values
    real time applicatiom when we want to get an object from list, where these object has unique property.

    reduce:
    	iteraates, call back function
    	reduce to a single value - number, array, object
    	2 parameters: for call back function
    		1 'acc' - total of all calculations
    		2 'curr' - current iteration value

    	reduce(callBack(acc, curr), initialValue)

    Math Object
    Date Object


    Objects:
    	Objetcs are collection of key value pairs, property values can be string, numbers, booleans, arrays and functions, however if the property value is function its called a method.

    	let person = {
    		name:'nanda'
    	}

    	exe1: create sample object with method, delete property and check



    Nested Object

    	property with special chars 'person-name':'nanda'
    	to delete property delete person.name
    	to access property: person.name
    	how to access property with special chars person['my-age']
    	we can directly assign the variable to the property like,

    	let age = 20

    	let person = {
    		age:age
    	}

    	or let person = {
    		age // if the property and the name of the variable assgined to the property are same means.
    	}

    	exe 2: create sample nested object with methods, access nested property

    this:
    	in regular function 'this' is determined by 'How' a function is invoked...

    	let person = {
    		name:'nanda',
    		info() {
    			console.log(this.name)
    		}

    	}

    	person.info() // in the infor function this refers to the person object

    	this without object name default to window object,
    	arrow functions pump the breaks


    	function showThis() {
    		console.log(this)
    	}

    	let person = {
    		name:'nanda',
    		showThis
    	}


    	person.showThis()

    	exe: try to create event listener and pass anonymous function to the event listener higher order function.

    	need to analyze with the bindings.

    Factory Functions:
    	function that creates and return the object

    	exe: create factory function to create person object with info method to display the person object info

    Constructor function
    	new - creates new object, points to it, omit return

    	common practice - Declare or Define the function cname Starting with cap letter

    	new will point to this.

    	exe: create construcor Person function with names and method

    Constructor Property:
    	All objects in JS have access to 'constructor' property that returns constructor function that created it.
    	built in constructor function arrays and function are objects in JS.

    	new will call the constructor function

    	exe: try to use constructor property and create object


    Prototype:
    	prototypal inheritance
    	Object.prototype property can be used to achieive the inheritance

    	JS uses prototypal inheritance model. This means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. so any properties and methods or prototype can be accessed by every instance. protoype propert returns a object.

    	in protoype we are not copying the functions in the prototype to all the objects instead we are accessig from the prototype.

    	exe: create prototype take bank deposit and withdraw as an example.

    Property Look up:
    	if child doesnot have the property then ask the parent which is the prototype

    		Bank Instance
    			Parent Prototype

    ES6 Class syntax
    	here the prototype is not required


    	exec: convert the Bank using ES6 class syntax

    Call
    	runs instanly, arguments - list of items
    	using call() method binding the object, this point to the object passed in the call method.

    	exe:
    		1. put function outside the object
    		2. put function inside the object
    		3. pass the args to the function and check

    apply:
    	runs instanly, arguments - array of items
    	need to pass the function params in the array args

    bind:
    	 assign, use later, arguments - list of items

    Button Example:
    	increment counter exe using bind
