## Variables:

- An online shop – the information might include goods being sold and a shopping cart.
- A chat application – the information might include users, messages, and much more.

### A variable

- A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

- To create a variable in JavaScript, use the **let** keyword.
- an combine the variable declaration and assignment into a single line:

> let message = 'Hello!'; /

- We can also declare multiple variables in one line:

`let user = 'John', age = 25, message = 'Hello';`

- A variable should be declared only once.

- A repeated declaration of the same variable is an error:

> let message = "This";
>
> // repeated 'let' leads to an error
>
> let message = "That"; // SyntaxError: 'message' has already been declared

### Variable naming

- The name must contain only letters, digits, or the symbols $ and \_.
- The first character must not be a digit.
- When the name contains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.

- What’s interesting – the dollar sign '$' and the underscore '\_' can also be used in names. They are regular symbols, just like letters, without any special meaning.

> let $ = 1; // declared a variable with the name "$"
>
> let _ = 2; // and now a variable with the name "_"

alert($ + \_); // 3

#### Invalid names:

- let 1a; // cannot start with a digit
- let my-name; // hyphens '-' aren't allowed in the name

#### Case matters:

- Variables named **apple** and **APPLE** are two different variables.

#### Non-Latin letters are allowed, but not recommended

It is possible to use any language, including cyrillic letters or even hieroglyphs, like this:

> let имя = '...';
>
> let 我 = '...';

#### Reserved names

There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

For example: let, class, return, and function are reserved.

The code below gives a syntax error:

> let let = 5; // can't name a variable "let", error!
>
> let return = 5; // also can't name it "return", error!

#### An assignment without use strict

Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.

> // note: no "use strict" in this example
>
> num = 5; // the variable "num" is created if it didn't exist
>
> alert(num); // 5
>
> This is a bad practice and would cause an error in strict mode:
>
> "use strict";
>
> num = 5; // error: num is not defined

### Constants

- To declare a constant (unchanging) variable, use const instead of let:

- Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:

> const myBirthday = '18.04.1982';
>
> myBirthday = '01.01.2001'; // error, can't reassign the constant!

### Uppercase constants

There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.
Such constants are named using capital letters and underscores.
For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:

> const COLOR_RED = "#F00";
>
> const COLOR_GREEN = "#0F0";
>
> const COLOR_BLUE = "#00F";
>
> const COLOR_ORANGE = "#FF7F00";
>
> // ...when we need to pick a color
>
> let color = COLOR_ORANGE;
>
> alert(color); // #FF7F00

### Name things right

Talking about variables, there’s one more extremely important thing.

A variable name should have a clean, obvious meaning, describing the data that it stores.

Variable naming is one of the most important and complex skills in programming. A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.

In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it’s much easier to find information that is well-labeled. Or, in other words, when the variables have good names.

Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.

Some good-to-follow rules are:

- Use human-readable names like userName or shoppingCart.
- Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.
- Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
- Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.
