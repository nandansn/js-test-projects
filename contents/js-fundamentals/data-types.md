## Data Types:

- A value in JavaScript is always of a certain type. For example, a string or a number.

- There are eight basic data types in JavaScript. Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.

> // no error
> let message = "hello";
>
> message = 123456;

- Programming languages that allow such things, such as JavaScript, are called **“dynamically typed”**, meaning that there exist data types, but variables are not bound to any of them.

### Number

> let n = 123;
>
> n = 12.345;

- The number type represents both integer and floating point numbers.
- Besides regular numbers, there are so-called **“special numeric values”** which also belong to this data type: **Infinity, -Infinity and NaN.**

- Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

- We can get it as a result of division by zero:

`alert( 1 / 0 ); // Infinity`

Or just reference it directly:

`alert( Infinity ); // Infinity`

- NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

  `alert( "not a number" / 2 ); // NaN, such division is erroneous`

> alert( NaN + 1 ); // NaN
>
> alert( 3 \* NaN ); // NaN
>
> alert( "not a number" / 2 - 1 ); // NaN

### BigInt

- In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.

- To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 \* 10308), but outside of the safe integer range ±(253-1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.

For example, these two numbers (right above the safe range) are the same:

> console.log(9007199254740991 + 1); // 9007199254740992
>
> console.log(9007199254740991 + 2); // 9007199254740992

- For most purposes ±(253-1) range is quite enough, but sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps.

**BigInt** type was recently added to the language to represent integers of arbitrary length.

A **BigInt** value is created by appending n to the end of an integer:

> // the "n" at the end means it's a BigInt
>
> const bigInt = 1234567890123456789012345678901234567890n;

**Compatibility issues**

Right now, BigInt is supported in Firefox/Chrome/Edge/Safari, but not in IE.

### String

- A string in JavaScript must be surrounded by quotes.

> let str = "Hello";
>
> let str2 = 'Single quotes are ok too';
>
> let phrase = `can embed another ${str}`;

- Backticks are **“extended functionality”** quotes. They allow us to embed variables and expressions into a string by wrapping them in **${…}**, for example:

> let name = "John";
>
> // embed a variable
> alert( `Hello, ${name}!` ); // Hello, John!
>
> // embed an expression
> alert( `the result is ${1 + 2}` ); // the result is 3

## Note:

There is no character type.
In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is called “char”.
In JavaScript, there is no such type. There’s only one type: string. A string may consist of zero characters (be empty), one character or many of them.

### Boolean (logical type)

The boolean type has only two values: **true** and **false**.

This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

For instance:

> let nameFieldChecked = true; // yes, name field is checked
>
> let ageFieldChecked = false; // no, age field is not checked

### The 'null' value

The special **null** value does not belong to any of the types described above.

It forms a separate type of its own which contains only the null value:

> let age = null;

In JavaScript, null is not a **“reference to a non-existing object”** or a **“null pointer”** like in some other languages.

It’s just a special value which represents **“nothing”, “empty” or “value unknown”.**

The code above states that age is unknown

### The “undefined” value

- The special value undefined also stands apart. It makes a type of its own, just like null.
- The meaning of undefined is “value is not assigned”.
- If a variable is declared, but not assigned, then its value is undefined:

> let age;
>
> alert(age); // shows "undefined"

Technically, it is possible to explicitly assign undefined to a variable:

> let age = 100;
>
> // change the value to undefined
> age = undefined;
>
> alert(age); // "undefined"

But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.

### Objects and Symbols

The **object** type is special.

All other types are called **“primitive"** because their values can contain only a single thing (be it a string or a number or whatever).
In contrast, **objects** are used to store collections of data and more complex entities.

Being that important, objects deserve a special treatment. We’ll deal with them later in the chapter Objects, after we learn more about primitives.

The **symbol** type is used to create unique identifiers for objects.

### The typeof operator

The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.

> typeof undefined // "undefined"
>
> typeof 0 // "number"
>
> typeof 10n // "bigint"
>
> typeof true // "boolean"
>
> typeof "foo" // "string"
>
> typeof Symbol("id") // "symbol"
>
> typeof Math // "object" (1)
>
> typeof null // "object" (2)
>
> typeof alert // "function" (3)

- Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers. Here, it serves just as an example of an object.
- The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. D
  Definitely, null is not an object.It is a special value with a separate type of its own. The behavior of typeof is wrong here.
  The result of typeof alert is "function", because alert is a function.

The **typeof** operator allows us to see which type is stored in a variable.

- Usually used as typeof x, but typeof(x) is also possible.
- Returns a string with the name of the type, like "string".
- For null returns "object" – this is an error in the language, it’s not actually an object.
