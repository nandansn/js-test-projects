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
- we can use variable names within backticks like `${name}`

#### EXE

> create template literals with function combination

### Template Strings - HTML

- `<p>${name}</p>`
- `<ul>${names.map(name => {return <li>name</li>})}</ul>`


#### EXE

> Create html with template literals, make object with name, age, hobbies array

### Tagged Template

- combine the function name and template literal
- defint the function with the text and args(as ...vars), text will be an array, use map, map with index and text item, pass replace params in the text with the vars[index]

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
- 	function a () {
		setTimeout(function() {
			console.log(this) => this refers to the object left of the function call, here it is window object
		}, 2000)
	}

- function a () {
		setTimeout(() => {
			console.log(this) => this refers to the surrounding parent, here this is a
		}, 2000)
	}

	- to handle this for arrow function outside the arrow function assign the 'this' to some variable and use the defined variable in the arrow function	

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

- use to iterate the string, array, map, set - not object
- unlike forEach we can use break and continue in the forof

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
- Spread operator can be used with doms NodeList, convert into arrays and we can apply array methods on that.
- use spread operator to seperate dom element and use within [] to convert to array of items.


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
- to collect/gather the elements

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
- .from we can use for "arguments", inside the functtion

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

### for in 
- iterate over object properties
- not advised to use it on arrays, especially if the order is important.
- on arrays use "for of" loop instead

### Object keys, values and entries
- converts property names into array
- converts property values into array
- converts both

### Set Object

- stores collection of any values of unique object
- new Set()
- add(value)
- delete(value)
- clear()
- has(value)
- set accepts iterable objects, like array of values

### String includes()
- method to check the string value exist in the string

### Array includes()
- method to check if the item is availblable in the array or not





