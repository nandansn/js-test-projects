## Objects
- Objetcs are collection of key value pairs, property values can be string, numbers, booleans, arrays and functions, however if the property value is function its called a method.

- let person = {
    name:'nanda'
  }

#### EXE:
- create sample object with method, delete property and check

### Nested Object

- property with special chars 'person-name':'nanda'
- to delete property delete person.name
- to access property: person.name
- how to access property with special chars person['my-age']
- we can directly assign the variable to the property like,
	let age = 20
    or let person = {
    		age // if the property and the name of the variable assgined to the property are same means.
    	}
    	

#### exe 2: create sample nested object with methods, access nested property

### this
- in regular function 'this' is determined by 'How' a function is invoked...
	let person = {
    	name:'nanda',
    	info() {
    			console.log(this.name)
    	}

    }
    	
    person.info() // in the info function this refers to the person object

- 'this' defaults to without object.
- arrow functions - pump the breaks.
- 'this' points to the left of dot.
- if you are invoking the function without the object then the 'this' within the funciton refers to the window object, if it is running on node then empty object.
    let dp = () => {
    	console.log(this)
	}

	let bp = function ()  {
    	console.log(this)
	}
	let person = {
	    fname:'nanda',
    	dp,
    	bp

	}

	person.dp()
	person.bp()

- note: need to analyze with the bindings.

#### exe: try to create event listener and pass anonymous function to the event listener higher order function.

### Factory Functions:
- function that creates and return the object

	function createPerson(name, age, city) {
		return {
			name,
			age,
			city,
			info() {
			console.log(this.name);
			},
		};
	}


- exe: create factory function to create person object with info method to display the person object info

 ### Constructor function
- new - creates new object, points to it, omit return
- common practice - Declare or Define the function name Starting with cap letter
- new will point to this.

- exe: create constructor Person function with names and method

### Constructor Property:
- All objects in JS have access to 'constructor' property that returns constructor function that created it.
- built in constructor function, arrays and function are objects in JS.
- new will call the constructor function
- example: person.constructor
- exe: try to use constructor property and create object


### Prototype:
- prototypal inheritance
- avoid defining the method within the constructor, go for prototype.
- Object.prototype property can be used to achieive the inheritance
- JS uses prototypal inheritance model. This means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. so any properties and methods or prototype can be accessed by every instance. protoype property returns a object.

- in protoype we are not copying the functions in the prototype to all the objects instead we are accessig from the prototype.

- exe: create prototype take bank deposit and withdraw as an example.

### Property Look up:
- if child does not have the property then ask the parent which is the prototype
- Bank Instance
    	Parent Prototype

### ES6 Class syntax
- here the prototype is not required
- we can use Class in ES6 to avoid using constructor and prototype
- we need to define the constructor method within the class
- we can define the methods and this is common to all the objects, unlike function factory or construcor functions this method wont be copied when new object getting created
- defined methods will be part of the prototype

- exec: convert the Bank using ES6 class syntax

## Call, Apply and Bind

### Call
- runs instanly, 
- arguments - list of items
- using call() method binding the object and the funtion that is outside the object, 'this' used within the function point to the object passed in the call method.

	const nanda = { age:40};
	const sanmathi = { age:36 };

	function dpAge() {
		console.log(this.age)
	}

	dpAge.call(nanda);
	dpAge.call(sanmathi);

- we can pass the args like below,
	dpAge.call(nanda,'sfo','ca');

#### EXE:
1. put function outside the object
2. put function inside the object
3. pass the args to the function and check

### Apply:
- runs instanly, 
- arguments - array of items
- need to pass the function params in the array args, like below,
	dpAge.apply(nanda,['sfo','ca']);

### Bind:
- assign, use later, 
- arguments - list of items
- while creating the object itself we bind the function, this function will be called later based on some condtion
- during event listener we may need to execute the function on the object
- Button Example:
    increment counter exe using bind
