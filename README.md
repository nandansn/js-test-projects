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
- create inner function and return it
- you can use object and set the function property and return multiple functions

#### EXE

> create closure to show account balance, deposit, withdraw check limit. pass name, initial balance
>
> to outer function and create balance variable in the outer function

## ES6

### ES6 Intro

- Last major update ES6 - 2015
- Now we have ES7, ES8, ES9 and ES10

### var, let, const

- using var you can define, update and redefine values
- using let you can define and update values
- using const you can define value, you can't change the primitive value like number,boolean, string
- using const you can create reference, you can change the value of reference but not the reference.

#### EXE

> create primitive using let,var,const then do define, update and redefine.
>
> create non-primtive using let, var and const.

### Function scope and Block Scope:

- var, let, const
- let, const - block scoped {} - anything within {}
- var - function scoped

### Template String/literals

- use backticks ``

#### EXE

> create template literals with function combination

### Template Strings - HTML

#### EXE

> Create html with template literals, make object with name, age, hobbies array

### Tagged Template

- combine the function and template literal
- parse the test and args in the function use map and index to replace the literal variables

### Arrow Functions

- Arrow functions or Fat Arrow Functions
- no name, always expression, assign to variable
- no function keyword
- 'this' will treat differently

#### EXE

> Empty args arrow function
>
> Single arg arrow function
>
> multiple arg arrow function
>
> multi line arrow function
>
> return single line and multi line
>
> return object single line
>
> arrow function as call back function, single line and multiline
>
> create html with arrow function

### Arrow Functions - Object and 'this'

- regular function : 'this' refers parent, left of the dot,
- arrow function: refers to its current surrounding scope, from where its called.

#### EXE

> create arrow function in object compare with regular funciton using 'this'
>
> create call back settimeout

### Arrow Function - Select Elements and 'this'

- Use arrow function when required

#### EXE

> Use arrow function and regular function and analyze how they behave in the event listener call back
>
> Use setimeout function within the event listener and try using arrow and regular function.

### Default Parameters and Hositing

- Default parameter value is used when there are chances people dont pass the args
- When u pass the arg, then the actual value will take precedence
- Hositing, will not work for the arrow functions and function expression, try with let, var and const

#### EXE

> Create functions and arrow functions with default parameters

### Array, Variable, Object and Function Param Destructuring

- faster/easier way to access/unpack values from arrays
- objects into variables
- object structuring, directly the property name or using alias name
- we can access the nested property
- we can use the destructuring in the function param

#### EXE

> skip the value, unavailable index,
>
> swap variables
>
> Object destructuring
>
> function param destructuring

### New String Methods

- startsWith, endsWith, includes, repeat

#### EXE

> Manipulate string using startsWith, endsWith, includes, repeat

### For Of - Loop

- use to iterate the string and array

#### EXE

> try to iterate the string chars
>
> try to iterate the array

### Spread Operator ...

- Allows an iterable to spread/expand individually inside reciever
- split into single items and copy them
- copying is better option compared to referencing, copy wont affect the original value.
- ES8 spread operator can be used to copy the object
- Function args

#### EXE

> use spread operator to copy the array
>
> use spread operator to copy the object
>
> use spread operator and manipulate dom elements, get list of element content and display in span

### Rest Operator ...

- we can use for array and object
- ...rest operator should be the last element
- ...rest operator for param and ...spread operator for args
- can be combined with destructuring

#### EXE

> use with arrays
>
> use with object
>
> use with params in the function

### Array.of, Array.from

- .of and .from not on the prototype
- .of creates new Array instance from a variable number of arguments.
- .from returns Array object from any object with length property or iterable object.
- .from turns array-like/ish into array - string, nodeList, set

#### EXE

> use .of create new array
>
> use .from with NodeList, String or Array
>
> use .from with variable arguments and try to find total of numbers

### find, findindex, every, some

- find returns matched single item
- findIndex will return the index of the matched item
- every item should match the condition
- some, atleast one item match

#### EXE

> use find, findIndex, every and some

### Modules

- named export: for JS running on browser, you need to add module attribute in the script tag, then you need to the file extension

- export default, you can use any name to import it.

#### EXE

> add people names on button click, use data module and map in the event listener, put the logic in seperate module

#### ERROR

> https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import

### Synchronous

- JS is single threaded, executed one statement at a time

- Make soup example: chop onion, chop carrots, boil water 10 seconds, add carrot boil 5 seconds, add onion boil 5 seconds

### ASynchronous

- we can do processing in the background
- settimeout browser functionality, like this we can do fetch data, get geo location setTimer etc.
- we can modify the make soup example using ASynchronous settimeout

### Callbacks

- Nesting of callbacks
- nesting callbacks lead to callback hell
- callback hell with dom example

### Promises

- Solution to callback hell
- Promises state - Pending, Resolved, Rejected
- then catch - pass another callback
- you create Promise constructor, you pass call back function, for the call back function you pass resolve and reject as params
- initial state of the promise is pending
- resolve and reject are functions that sets the PromiseValue and PromiseStatus
- how to acccess the promise resolve data using 'then' within 'then' you can pass callback function, resolve data accessed in this callback function.
- how to catch promise reject, using the catch function
- you add condition like if data present or dom element present call resolve else reject

### Async/Await

- must have async, async will return promise.
- await, wait till the promise is settled
- error handling - try/catchcatch

## DOM

### DOM Comcept

	- dom is used to select the element and apply the css affect or to make any operation
	- we can apply the effect dierctly by traversing to the object property
	- we can use get methods to get element and access the property and apply the styling.
	- get methods return node or node list objects, they are like array objects.

### Window and DOM 

- window is browser api
- document refers to the page that displayed in the browser window.
- to check the property of the document you can use console.dir(document)

### getElementById

- id refers to the unique value of the element in the page.

#### EXE

- getElementById and apply different styles.

### getElementsByTagName

- select method to select element or group of elements, 
- node-list = array-like object.
- index, length property not array methods.
- returns HTMLCollection

### getElementsByClassname

- select methode to select element or group of elements
- node-list = array-like object.
- index, length property not array methods.
- returns HTMLCollection

### getQuerySelector

- returns single element, the type is object.


### getQuerySelectorAll

- returns NodeList, Collection of nodes
- it has item, entries, forEach, keys, values methods.

