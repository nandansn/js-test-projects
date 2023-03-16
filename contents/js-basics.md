## JS Basics

### Inline JS:

- adding JS with in the html tag. Like below

> < button onclick="alert('hello world..')">Click Me</ button>

### Internal JS

- adding JS within the script tag, like below. within the html file.

> < script> alert('hello'); </ script>

### External JS

- adding JS file outside the html,

> < script src="./js/ext.js"></ script>

### Variables

- most basic building blocks
- store, access. modify value
- declare, assignment operator, assign value
- assign value later, modify existing one.

#### example

> let name;
>
> name = 'nanda';
>
> console.log(name);
>
> name = 'kumar'
>
> console.log(name)

### variable name rules

- should start with letter, $ or \_
- can contain digits, letters, underscore, $
- no keywords like Map, if, for
- case sensitive - fullName vs Fullname, they are different
- camelCase or underscore , firstName or first_Name

### const, let and var

- var, let can be assigned and re-assigned
- var function scope
- let block scope
- const, can be assgined, can't re-assigned.

### prettier settings

### quoatation marks

- "" or ''

  > const name = 'nanda';
  >
  > const mail = "abc@gmail.com";
  >
  > const addr = "1'st street";

  ### string concat

  - using + operator
  - using `` back ticks, template string

  > const fname = 'nanda';
  >
  > const lname = 'kumar';
  >
  > let fullName = fname + lname;

  ### Numbers

  - loosely type, don't declare type.
  - example for loosley typed

  > let age = 30;
  >
  > age = 'twenty';

### Number operators

- +=
- -=
- \*=
- ++

---

- %

### implicit type conversion

- convert the number in the string to number, like let age = '60', for age = age - '5', this will get converted to number and added as 55;

- in case of + operator '65' + 5 will be '655'

### Data Types

- Primitive - String, Number, Boolean , Null, Undefined, Symbol
- Object - Arrays, Functions, Objects
- typeof = operator (typeof variable) (typeof value)

### Arrays

- Arrays - [], 0 index based

> const something = ['1',2,'a',null,undefined]
>
> console.log(something[0])
>
> console.log(something[6]) // gives the result 'undefined'

### Functions

- reduce repeating code
- declare, invokde

> function sum(a, b) {
>
> console.log(a + b);
>
> }
>
> sum(10, 11);

### Function - params, args

- params, which declare/define
  - placeholders, local vars
- arguments, when invoke/call/run
  - use vars/vals, multiple params, undefined

### Function - return

- return
  - default undefined, shortcuts, ignores after

> return 2 + 3 // shortcut

### Function Expression

- expressions - another way to define a function
- create a variable, assign the function, use the variable to invoke
- diff - hoisting, use - arrow func, libraries

> let sum = function (a, b) {
>
> return a + b;
>
> };
>
> sum(1,2)
>
> let sums = [sum(1,2), sum(3,4)] // invoke example

### Objects

- Objects - key/value pairs, methods
- dot notation

> const person = {
>
> name:'nanda',
>
> age:40
> }
>
> person.name

### conditional statements

- if / else, conditional statements
  - evaluated conditonal statement returns true or false.
- condtional statement uses following comparison operators,

  - '>' , '<' , '>=', '<=', '==', '===', '!=', '!=='

  - equality operators
    - == or != checks only value
    - === or !== checks value and type

  > if (2>1) {
  >
  > console.log('true')
  >
  > } else {
  >
  > console.log('false')
  >
  > }

### Logical Operators

- || - OR
- && - AND

### switch statement

- instead of using nested if else we can use switch case

### Loops

- repeatedly to run the block of the code, while condition is true
- while, do ..while, for
- while, runs the code block when the condition is true.
- do..while, runs once the code block and repeated if the condition is true
- for
  - start value
  - condition
  - counter

### String properties and methods

- you can refer the string methods from forums
- you can access the string methods using string var or string literals
- length, property find the length of the string
- toUpperCase() method to make the string as upper case chars
- charAt(0), method returns the char at index '0'
- indexOf('a'), method returns the char position in the string.
- includes('abc'), method to check the substring exist or not
- slice(0,2), method returns the substring, chars from 0 to 2
- slice(-3), method returns the substring, chars from last

### Template literals

- backticks ``
- Interpolation ${} - insert expression

### Array Properties and Methods

- length, property returns the number of items in the array
- concat(), we can concat arrays
- reverese(), method to return the items in reversed order.
- unshift(), to add item at the begining of the array.
- shift(), to remove the item at the begining of the array.
- push(), to add the item at the last
- pop(), to remove the item from the last.
- splice(), mutates original array, pass the index and number of items, removes the items from the specified index.

### Value vs Reference

- when assigning primitive data type to variable, any changes are made directly to that value, without affecting original value.

- When assigning non-primitive data type value to a variable, is done by reference so any changes will affect all the references.

- example,

> let num1 = 1;
>
> let num2 = num1;
>
> num1 = 3; // num2 will not be affected
>
> let p = {name:'nanda'}
>
> let k = p; // by reference
>
> k.name = 'kumar' // p also get affected

### null and undefined

- undefined - js cannot find value for this

  - variable without value
  - missing function arguments
  - missing object properties

- null - developer sets the value

> let num = 20 + null // result 20, null considered as 0
>
> let num2 = 20 + undefined // result NaN

### Truthy or Falsy

- falsy values "", '', ``, 0. -0, null, undefined, NaN

- in javascript condition there is truthy or falsy value, for example, let s = 'a'
  is truthy and s = '' is falsy

### Ternary operator

- condition ? (runs if true) : (runs if false)

### Global scope

- let
  - variable outside the code block {} said to be in global scope.
  - we can access from anywhere
  - name collisions, by mistake the value in the variable may be affected

### local scope

- var
  - cannot be accessed from outsie code block {}
  - if - not var

### Variable Lookup

- how the variable is looked up, check the variable in the local scope, if not found in the next level of scope and it goes on to the global scope

> let number = 10;
>
> function calc(m1, m2) {
> let result_1 = m1 + m2 + number; // number will be looked in local and then global if > not found
> return result_1;
> }
>
> console.log(calc(20, 30));

### Call back functions, Higher order functions, Functions as first class objects

- Functions as first class objects - stored in a variable(expression), passed as an argument to another function, return from the function (closure)

- Higher Order Function - accepts another function as an argument or returns another function as a result.

- Call back function - passed to another function as an argument and executed inside the function. 

### Array Iterators

- there are powerful array methods to iterate over array,  'for' loop is not required.
- accept callback function as an argument, calls callback against each item in a array.
reference item in the call back parameter.


#### array iterators - forEach
- does not return new array
- pass the function to forEach method, always try to define the method outside, this way forEach call will look neat.

#### array iterators - map

- does return new array
- does not change size of original array
- uses values from original array when making new one
- callback function should return 

#### array iterators - filter

- does return new array.
- size of new array depends on the filter condtion
- values returned in the new array filtered based on the condition
- callback function should return 

#### array iterator - find

- returns object
- returns first match, if no match undefined
- great for getting unqiue value

#### array iterator - reduce

- iterates, callback function
- reduce to a single value - number, array, object
- 1 parameter ('acc') - total of all calculations
- 2 parameter ('curr') - current iteration/value
- return acc

### Math and Date Objects

#### Math

- Math.sqrt(number);
- Math.random()
- Math.floor(number);
- Math.ceil(number);

#### Date

- Date(), class
- using the date object we can get the index of the month in a year from 0 to 11,
- using the date object we can get the index of the day in a week from 0 to 6,



