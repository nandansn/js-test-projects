## Basic operators, maths
---
### Terms: “unary”, “binary”, “operand”

- **An operand** – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

- **An operator** is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

> let x = 1;
>
> x = -x;
>
> alert( x ); // -1, unary negation was applied

- **An operator** is binary if it has two operands. The same minus exists in binary form as well:

> let x = 1, y = 3;
>
> alert( y - x ); // 2, binary minus subtracts values


### Maths

The following math operations are supported:

    Addition +,
    Subtraction -,
    Multiplication *,
    Division /,
    Remainder %, The remainder operator %, despite its appearance, is not related to percents
    Exponentiation **. The exponentiation operator a ** b raises a to the power of b.

### String concat with +

- Usually, the plus operator + sums numbers.But, if the binary + is applied to strings, it merges (concatenates) them:

>let s = "my" + "string";
>

>alert(s); // mystring
>alert( '1' + 2 ); // "12"
>alert( 2 + '1' ); // "21"
>alert(2 + 2 + '1' ); // "41" and not "221"
>alert('1' + 2 + 2); // "122" and not "14"


### Numeric conversion, unary +

- The plus + exists in two forms: the binary form that we used above and the unary form.

- The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

> // No effect on numbers
> 
> let x = 1;
> alert( +x ); // 1
> 
> let y = -2;
> 
> alert( +y ); // -2
> 
> // Converts non-numbers
> 
> alert( +true ); // 1
> 
> alert( +"" );   // 0


**Example**

>
>let apples = "2";
>
>let oranges = "3";
>
>alert( apples + oranges ); // "23", the binary plus concatenates strings

- If we want to treat them as numbers, we need to convert and then sum them:

>
> let apples = "2";
>
> let oranges = "3";
>
>// both values converted to numbers before the binary plus
>
>alert( +apples + +oranges ); // 5
>
>// the longer variant
>
>// alert( Number(apples) + Number(oranges) ); // 5

- Note: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.

### Assignment

- Assignment = returns a value

- The fact of = being an operator, not a “magical” language construct has an interesting implication.

- All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.

- The call x = value writes the value into x and then returns it.

### Chaining assignments

> let a, b, c;
> 
> a = b = c = 2 + 2;
>
> alert( a ); // 4
>
> alert( b ); // 4
>
> alert( c ); // 4

- Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

### Modify-in-place

- We often need to apply an operator to a variable and store the new result in that same variable.

- This notation can be shortened using the operators += and *=:

> let n = 2;
>
>n += 5; // now n = 7 (same as n = n + 5)
>
>n *= 2; // now n = 14 (same as n = n * 2)
>
>
>alert( n ); // 14

Short **“modify-and-assign”** operators exist for all arithmetical and bitwise operators: /=, -=, etc.

Such operators have the same precedence as a normal assignment, so they run after most other calculations:

>
>let n = 2;
>
>n *= 3 + 5;
>
>alert( n ); // 16  (right part evaluated first, same as n *= 8)

### Increment/decrement

- Increasing or decreasing a number by one is among the most common numerical operations.

    - Increment ++ increases a variable by 1:

    > let counter = 2;
    >
    > counter++;        // works the same as counter = counter + 1, but is shorter
    >
    > alert( counter ); // 3

    - Decrement -- decreases a variable by 1:

    > let counter = 2;
    > counter--;        // works the same as counter = counter - 1, but is shorter
    > alert( counter ); // 1

- Note:
    - The operators ++ and -- can be placed either before or after a variable.

        - When the operator goes after the variable, it is in “postfix form”: counter++.
        - The “prefix form” is when the operator goes before the variable: ++counter.


### To summarize:

- If the result of increment/decrement is not used, there is no difference in which form to use:

> let counter = 0;
>
> counter++;
> 
> ++counter;
>
> alert( counter ); // 2, the lines above did the same

- If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:

> let counter = 0;
>
> alert( ++counter ); // 1

- If we’d like to increment a value but use its previous value, we need the postfix form:

> let counter = 0;
>
> alert( counter++ ); // 0

### Increment/decrement among other operators

- The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.

For instance:
>
>let counter = 1;
>
>alert( 2 * ++counter ); // 4

Compare with:

>
>let counter = 1;
>
>alert( 2 * counter++ ); // 2, because counter++ returns the "old" value

Though technically okay, such notation usually makes code less readable. One line does multiple things – not good.

While reading code, a fast “vertical” eye-scan can easily miss something like counter++ and it won’t be obvious that the variable increased.

We advise a style of “one line – one action”:

>
>let counter = 1;
>
>alert( 2 * counter );
>
>counter++;

### Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

- These operators are not JavaScript-specific. They are supported in most programming languages.

- The list of operators:

  -  AND ( & )
  -  OR ( | )
  -  XOR ( ^ )
  -  NOT ( ~ )
  -  LEFT SHIFT ( << )
  -  RIGHT SHIFT ( >> )
  -  ZERO-FILL RIGHT SHIFT ( >>> )


### Comma

- The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

- The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

#### For example:

>
> let a = (1 + 2, 3 + 4);
>
> alert( a ); // 7 (the result of 3 + 4)

- Why do we need an operator that throws away everything except the last expression?

> // three operations in one line
>
> for (a = 1, b = 3, c = a * b; a < 10; a++) {
>  ...
> }