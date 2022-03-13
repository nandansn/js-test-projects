## JS Basics

### Inline JS:

- adding JS with in the html tag. Like below

> < button onclick="alert('hello world..')">Click Me</ button>

### Internal JS

- adding JS within the script tag, like below.

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

  - loosely type, dent declare type.
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

- instead of using mnested if else we can use switch case

### Loops

- repeatedly to run the block of the code, while condition is true
- while, do ..while, for
- while, runs the code block when the condition is tru.
- do..while, runs once the code block and repeated if the condition is true
- for
  - start value
  - condition
  - counter
