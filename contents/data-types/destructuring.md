## Destructuring assignment

The two most used data structures in JavaScript are Object and Array.

- Objects allow us to create a single entity that stores data items by key.
- Arrays allow us to gather data items into an ordered list.

Although, when we pass those to a function, it may need not be an object/array as a whole. It may need individual pieces.

Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

**code starts**

// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

**code ends**

Ignore elements using commas

Unwanted elements of the array can also be thrown away via an extra comma:

**code starts**

// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul

**code ends**

**Note**
Works with any iterable on the right-side

…Actually, we can use it with any iterable, not only arrays:

**code starts**

    let [a, b, c] = "abc"; // ["a", "b", "c"]
    let [one, two, three] = new Set([1, 2, 3]);

**code ends**

That works, because internally a destructuring assignment works by iterating over the right value. It’s a kind of syntax sugar for calling for..of over the value to the right of = and assigning the values.

**Note**

Assign to anything at the left-side

We can use any “assignables” on the left side.

For instance, an object property:

**code starts**

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

alert(user.name); // John
alert(user.surname); // Smith

**code ends**

**Note**
Looping with .entries()
In the previous chapter we saw the Object.entries(obj) method.
We can use it with destructuring to loop over keys-and-values of an object:

**code starts**

let user = {
name: "John",
age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
alert(`${key}:${value}`); // name:John, then age:30
}

**code ends**

The similar code for a Map is simpler, as it’s iterable:

**code starts**

let user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user) {
alert(`${key}:${value}`); // name:John, then age:30
}

**code ends**

### The rest ‘…’

Usually, if the array is longer than the list at the left, the “extra” items are omitted.
For example, here only two items are taken, and the rest is just ignored:

**code starts**

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
// Further items aren't assigned anywhere

**code ends**

If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":

**code starts**

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is array of items, starting from the 3rd one
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

**code ends**

The value of rest is the array of the remaining array elements.

We can use any other variable name in place of rest, just make sure it has three dots before it and goes last in the destructuring assignment.

**let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];**
**// now titles = ["Consul", "of the Roman Republic"]**

## Default values

If the array is shorter than the list of variables at the left, there’ll be no errors. Absent values are considered undefined:

**code starts**
let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined

**code ends**

If we want a “default” value to replace the missing one, we can provide it using =:

**code starts**

// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name); // Julius (from array)
alert(surname); // Anonymous (default used)

**code ends**

Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided.
For instance, here we use the prompt function for two defaults:

**code starts**

// runs only prompt for surname
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

alert(name); // Julius (from array)
alert(surname); // whatever prompt gets

**code ends**

## Object destructuring

The destructuring assignment also works with objects.

The basic syntax is:

`let {var1, var2} = {var1:…, var2:…}`

We should have an existing object on the right side, that we want to split into variables. The left side contains an object-like “pattern” for corresponding properties. In the simplest case, that’s a list of variable names in {...}.

For instance:

**code starts**

let options = {
title: "Menu",
width: 100,
height: 200
};

let {title, width, height} = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200

**code ends**

Properties options.title, options.width and options.height are assigned to the corresponding variables.

The order does not matter. This works too:

// changed the order in let {...}
`let {height, width, title} = { title: "Menu", height: 200, width: 100 }`

The pattern on the left side may be more complex and specify the mapping between properties and variables.

If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w, then we can set the variable name using a colon:

**code starts**

let options = {
title: "Menu",
width: 100,
height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title); // Menu
alert(w); // 100
alert(h); // 200

**code ends**

The colon shows **“what : goes where”.** In the example above the property width goes to w, property height goes to h, and title is assigned to the same name.

For potentially missing properties we can set default values using "=", like this:

**code starts**

let options = {
title: "Menu"
};

let {width = 100, height = 200, title} = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200

**code ends**

Just like with arrays or function parameters, default values can be any expressions or even function calls. They will be evaluated if the value is not provided.
In the code below prompt asks for width, but not for title:

**code starts**

let options = {
title: "Menu"
};

let {width = prompt("width?"), title = prompt("title?")} = options;

alert(title); // Menu
alert(width); // (whatever the result of prompt is)

**code ends**

We also can combine both the colon and equality:

**code**

let options = {
title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;

alert(title); // Menu
alert(w); // 100
alert(h); // 200

**code**

If we have a complex object with many properties, we can extract only what we need:

**code**

let options = {
title: "Menu",
width: 100,
height: 200
};

// only extract title as a variable
let { title } = options;

alert(title); // Menu

**code**

### The rest pattern “…”

What if the object has more properties than we have variables? Can we take some and then assign the “rest” somewhere?
We can use the rest pattern, just like we did with arrays. It’s not supported by some older browsers (IE, use Babel to polyfill it), but works in modern ones.
It looks like this:

**code**

let options = {
title: "Menu",
height: 200,
width: 100
};

// title = property named title
// rest = object with the rest of properties
let {title, ...rest} = options;

// now title="Menu", rest={height: 200, width: 100}
alert(rest.height); // 200
alert(rest.width); // 100

### Note

Gotcha if there’s no let

In the examples above variables were declared right in the assignment: let {…} = {…}. Of course, we could use existing variables too, without let. But there’s a catch.

This won’t work:

**code**

let title, width, height;

// error in this line
{title, width, height} = {title: "Menu", width: 200, height: 100};

The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code block. Such code blocks can be used to group statements, like this:

{
// a code block
let message = "Hello";
// ...
alert( message );
}

**code**

So here JavaScript assumes that we have a code block, that’s why there’s an error. We want destructuring instead.

To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...):

let title, width, height;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu

### Nested destructuring

If an object or an array contain other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.

In the code below options has another object in the property size and an array in the property items. The pattern on the left side of the assignment has the same structure to extract values from them:

**code**

let options = {
size: {
width: 100,
height: 200
},
items: ["Cake", "Donut"],
extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
size: { // put size here
width,
height
},
items: [item1, item2], // assign items here
title = "Menu" // not present in the object (default value is used)
} = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200
alert(item1); // Cake
alert(item2); // Donut

**code**

### Smart function parameters

There are times when a function has many parameters, most of which are optional. That’s especially true for user interfaces. Imagine a function that creates a menu. It may have a width, a height, a title, items list and so on.

Here’s a bad way to write such function:

function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
// ...
}

In real-life, the problem is how to remember the order of arguments. Usually IDEs try to help us, especially if the code is well-documented, but still… Another problem is how to call a function when most parameters are ok by default.

Like this?

// undefined where default values are fine
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])

That’s ugly. And becomes unreadable when we deal with more parameters.

Destructuring comes to the rescue!

We can pass parameters as an object, and the function immediately destructurizes them into variables:

// we pass object to function
let options = {
title: "My menu",
items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
// title, items – taken from options,
// width, height – defaults used
alert( `${title} ${width} ${height}` ); // My Menu 200 100
alert( items ); // Item1, Item2
}

showMenu(options);

We can also use more complex destructuring with nested objects and colon mappings:

let options = {
title: "My menu",
items: ["Item1", "Item2"]
};

function showMenu({
title = "Untitled",
width: w = 100, // width goes to w
height: h = 200, // height goes to h
items: [item1, item2] // items first element goes to item1, second to item2
}) {
alert( `${title} ${w} ${h}` ); // My Menu 100 200
alert( item1 ); // Item1
alert( item2 ); // Item2
}

showMenu(options);

The full syntax is the same as for a destructuring assignment:

function({
incomingProperty: varName = defaultValue
...
})

Then, for an object of parameters, there will be a variable varName for property incomingProperty, with defaultValue by default.

Please note that such destructuring assumes that showMenu() does have an argument. If we want all values by default, then we should specify an empty object:

showMenu({}); // ok, all values are default

showMenu(); // this would give an error

We can fix this by making {} the default value for the whole object of parameters:

function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
alert( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200

In the code above, the whole arguments object is {} by default, so there’s always something to destructurize.

### Summary

- Destructuring assignment allows for instantly mapping an object or array onto many variables.

The full object syntax:

let {prop : varName = default, ...rest} = object

- This means that property prop should go into the variable varName and, if no such property exists, then the default value should be used.

- Object properties that have no mapping are copied to the rest object.

The full array syntax:

let [item1 = default, item2, ...rest] = array

- - The first item goes to item1; the second goes into item2, all the rest makes the array rest.

It’s possible to extract data from nested arrays/objects, for that the left side must have the same structure as the right one.
