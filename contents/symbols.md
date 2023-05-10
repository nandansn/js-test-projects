## Symbols

- A symbol is a primitive data type introduced in ES6. It's created with Symbol function and globally unique. Symbols can be used as object properties to provide uniqueness level access to objects and as hooks into built-in operators and methods, enabling us to alter the default behavior of JavaScript.

``
const mySymbol = Symbol('mySymbol');
typeof mySymbol // "symbol"

Symbol('mySymbol') === Symbol('mySymbol') // false
``