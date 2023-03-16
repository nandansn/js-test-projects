## Comparisons

---

We know many comparison operators from maths.

In JavaScript they are written like this:

    Greater/less than: a > b, a < b.
    Greater/less than or equals: a >= b, a <= b.
    Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
    Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.


### Boolean is the result

All comparison operators return a boolean value:

    true – means “yes”, “correct” or “the truth”.
    false – means “no”, “wrong” or “not the truth”.

### String comparison

To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

In other words, strings are compared letter-by-letter.

> alert( 'Z' > 'A' ); // true
>
> alert( 'Glow' > 'Glee' ); // true
>
> alert( 'Bee' > 'Be' ); // true

**How string comparison works?**
    Compare the first character of both strings.
    If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
    Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
    Repeat until the end of either string.
    If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

   -  **Note**

        Not a real dictionary, but Unicode order

        The comparison algorithm given above is roughly equivalent to the one used in dictionaries or phone books, but it’s not exactly the same.

        For instance, case matters. A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a". Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode).     

### Comparison of different types

When comparing values of different types, JavaScript converts the values to numbers.

For example:

>alert( '2' > 1 ); // true, string '2' becomes a number 2
>
>alert( '01' == 1 ); // true, string '01' becomes a number 1

For boolean values, true becomes 1 and false becomes 0.

For example:

>alert( true == 1 ); // true
>
>alert( false == 0 ); // true

### Strict equality

- A strict equality operator **===** checks the equality without type conversion.

- In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

> alert( 0 === false ); // false, because the types are different

- There is also a “strict non-equality” operator **!==** analogous to !=.

### Comparison with null and undefined

There’s a non-intuitive behavior when null or undefined are compared to other values.

- For a strict equality check ===

    These values are different, because each of them is a different type.

   > alert( null === undefined ); // false

- For a non-strict check ==

    There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

   > alert( null == undefined ); // true

- For maths and other comparisons < > <= >=

   - null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

    Now let’s see some funny things that happen when we apply these rules. And, what’s more important, how to not fall into a trap with them.


An incomparable undefined

The value undefined shouldn’t be compared to other values:

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

Why does it dislike zero so much? Always false!

We get these results because:

    Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
    The equality check (3) returns false because undefined only equals null, undefined, and no other value.

### Avoid problems

Why did we go over these examples? Should we remember these peculiarities all the time? Well, not really. Actually, these tricky things will gradually become familiar over time, but there’s a solid way to avoid problems with them:

    Treat any comparison with undefined/null except the strict equality === with exceptional care.
    Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.
