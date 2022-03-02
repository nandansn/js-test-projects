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




### Currying,

- currying is transformation of functions, that translates a function from callables f(a,b,c) into callable as f(a)(b)(c)
- it transforms the function
- Fixed-Length functions only,
	- currying requires function to have fixed number of arguments
	- function that uses rest parameters, such as f(..args), can't be curried this way.
- we can use _.curry(func) from loadash



### Modules

- provide strucure
- split code into small files
- share code across app
- same as react
- use server extension locally
- used in projects
- need to use local server file extension

- named export: for JS running on browser, you need to add module attribute in the script tag, then you need to the file extension

- export default, you can use any name to import it.

#### Named Export

- export const name = 'nanda', use export keyword before the variable for named export
- cannot use import statement outside the module error: to resolve this you need to set specific type attribute as 'module' in the script tag.
- when you are importing you need to say the extension
- multipe imports, import {a,b} from './data.js'
- this will work in the file server, means the pages and static html files need to be in the server like tomcat
- without server it willl not work
- export module name and import name should match
- to export multiple things you use like export {a,b,c}
- we may endup in the module name conflicts when importing multiple modules, to avoid this, use with the alias like export {name as aliasName}


#### Default Export

- export default variableName/functionName
- with the default, names used to import can be anything

#### Aggregate Modules

- we can create a module and in that you can group the submodules and import it like circe,triangle,square are submodule, we can group the export in shapes module, then we can import from shapes module
- ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#aggregating_modules
#### EXE

> add people names on button click, use data module and map in the event listener, put the logic in seperate module


#### Dynamic import

- we can use import() function to load the modules dynamically, import() function returns the promise.
- scenario: dynamic imports can be used on some condition, this avoids import of the file, unnecessarily.
- faster code, improves the performance
- https://www.youtube.com/watch?v=ddVm53j80vc&ab_channel=WebDevSimplified



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

### DOM Concept

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
- returns the object type

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

### Navigating the doms

- children - returns HTMLCollection
- childNodes - returns NodeList, all childnodes including whitespace, which is treated as a textnode.
- parentElement - returns the
- nextSibling, previousSibling - includes text node
- nextElementSibling, previousElementSibling - returns HTMLElement object
- textContentValue: nodeValue, textContent
- nodeValue: need to consider the text node.
- textContent: we can directly use with the object

#### EXE

> use ul and li , try to get the list items, using childNodes
>
> get firstChild and lastChild
>
> add button, event listener and add async and wait to apply some style

### Attribute

- getAttribute
- setAttribute
- classList - you can add the class names in the lisr using add() method of classList property.
- className - you can set single or multiple classnames, names seperated by space.
- set text using textContent property

#### EXE

> use set and get attribute for the html elements
>
> use classList and className to update the multiple class properties.
>
> try to set text using textContent property.

### createElement, createTextNode, appendChild, remove , removeChild

- createElement is used to create new html element,
- createTextNode is used to create new text node to set the text value
- appendChild is used to add the element or node with in the another element or node
- remove to remove the selected element.
- removeChild to remvoe the element within the element.
- to access elements with in the element, use that element object and querSelector method,
  like element.querySelector()

### insertBefore, replaceChild, prepend innerText

- insert before takes 2 param, one is the html element and other before which element we need insert
- prepend is used to place the newly created element before all the elements with in an element.

### innerHTML, textContent

- innerHTML gets the whole html tag and its content
- textContent gets the text content of the htmlElement
- with innerHtml we can use template string to set the child html elements instead of using appendChild method.

### style

- is the property of the html element, this can be used to apply the css

### Events

- you can use onclick attribute to call the function, which old style of code or addEventListener
- click event: select element, addEventListener('event', callbackfunction)
- for styling define the css seperately and use the class list to play around

### function reference

- decalare the fucntion and call the function as reference
- like addEventListener('event', function reference)

### mouse events

    - few events from list, mousedown, mouseup, mouseenter - moved on to an element, mouseleave - moved out of an element.

### key events

- keypress - key is pressed, keydown - when key is down, keyup - when key is released.
- use console.dir(element) => displays the element object

### Event Object

- event object argument e, evt
- info about triggered event
- event.type
- event.cuurentTarget => points to element triggered the event
- this keyword => points to the current element
- preventDefault - prevents default behaviour

### CurrentTarget vs Target

- currentTarget - always refers to the element to which the event handler has been attached to.
- target - refers to the element on which the event triggered.example nested element,
  like <button>Click<strong>Strong Nested</strong></button>

#### EXE

> create form name, age implement form validation warning or error message, use inline css for color property,
>
> add the name and form age value as person object, have display button to display all the name age as list
>
> add text to enter name, add button to remove the entered name from the list elements
>
> use innerHtml to set new html elements passing dynamic values, also use textContent to set/get the values
>
> try to implement the target and target 

### Event Propogation - Event Bubbling, Event Capturing

- allows selecting dynamic elements
- ordere in which the events are fired.
- event bubbling - clicked element first then bubbles up default, this bubbles from child to parent element, if the parent element has binded with event listener
- we can stop the event bubbling on the particular element using stopPropogation
- event capturing - fires at the root and fires until the target is reached, can be used on the dynamically generated element, how to bind the event listener for dynamically generated elements that is through adding listener to the parent element, that will hold the dynamic child elements


#### EXE

> add event on the parent element and try to click the child element
>
> stop the event propogation on the element
>
> add person(with name, age, city), then list the person names on lickining the person name it should display the person details


### Forms - Form submit event, prevent default , how to get the value.

- form add event listener for 'submit
- preventDefault this will prevent the default behaviour of the form. default behaviour is sending the data to server and refreshing the page

### Local Storage

- web storage api - provided by browser.
- session storage, local storage
- session storage will be live within the tab,
- local storage will be live between opening and closing of the window,
- both storage stores data in key, value pair, key value pair type is string
- localStorage - methods: setItem, getItem removeItem, clear
- sessionStorage - methods: setItem, getItem removeItem, clear


- JSON.stringify() and JSON.parse() used to store and get complicated values like string or object.



### EXE

- add form for some calculation display the result with styling
- store form data in local storage pass between pages

### AJAX

- XMLHTTPRequest - request to server
- open  - set request method with methos, url etc
- send - initiates the request
- onLoad - will initiated when the request completed
- readyState - will initiated when the state of the request get changed
- status - UNSENT, OPENED, HEADERS_RECEIVED, LOADING, DONE
- you can use onReadyStateChange to capture the status and do further processing

Refer: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status

### AJAX Promise

- use the xml open and send with in the promise
- set the onload property or onReadyStateChange with the resolve and reject condition

### Fetch

- this is simple compared to XMLHTTPRequest
- need to use fetch() method, pass URL, 
- fetch method will return the promise with response data,
- from response data.json() will return promise
- from data.json() promise data we need to get the actual response value
- ref: https://developer.mozilla.org/en-US/docs/Web/API/fetch


### Async/Await

- simple than fetch
- need to use try / catch to catch the error
- await is used when the method call returns the promise
- async added before function declaration

### ES6 Slider

