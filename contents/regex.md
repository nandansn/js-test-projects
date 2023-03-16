- Regular expressions are used in a variety of contexts, including programming languages, text editors, and command-line tools. Here are some common use cases for regular expressions:

- Validation: Regular expressions can be used to validate user input in web forms, such as email addresses, phone numbers, and passwords. For example, you can use a regular expression to ensure that an email address contains a valid username, followed by an "@" symbol, followed by a valid domain name.

- Search and replace: Regular expressions can be used to search and replace text in a document or a string. For example, you can use a regular expression to replace all occurrences of a word with another word, or to remove all whitespace from a string.

- Parsing: Regular expressions can be used to parse text and extract specific information from it. For example, you can use a regular expression to extract all the URLs from a webpage, or to extract all the phone numbers from a list of contacts.

- Syntax highlighting: Text editors and IDEs use regular expressions to highlight syntax in code. For example, a regular expression can be used to highlight all the keywords in a programming language, or to highlight strings and comments in code.

- Data cleaning: Regular expressions can be used to clean up messy data. For example, you can use a regular expression to remove all non-numeric characters from a phone number, or to standardize the formatting of dates in a dataset.

**_Here are some common flags in JavaScript and their use:_**

- i (ignore case): This flag makes the regular expression case-insensitive. For example, /hello/i would match both "hello" and "HELLO".

- g (global): This flag makes the regular expression global, meaning it matches all occurrences in a string. For example, /o/g would match all occurrences of the letter "o" in a string.

- m (multiline): This flag makes the regular expression treat the input as multiline text, meaning the ^ and $ characters match the start and end of each line instead of the start and end of the entire string.

**Testing: regexp.test**

`let str = "I love JavaScript";
let regexp = /LOVE/i;
sfsdf
alert( regexp.test(str) ); // true`

**Replacing: str.replace**

- The method str.replace(regexp, replacement) replaces matches found using regexp in string str with replacement (all matches if there’s flag g, otherwise, only the first one).

- The second argument is the replacement string. We can use special character combinations in it to insert fragments of the match:

- $& inserts the whole match

- $` inserts a part of the string before the match

- $' inserts a part of the string after the match

- $n if n is a 1-2 digit number, then it inserts the contents of n-th parentheses, more about it in the chapter Capturing groups

- $<name> inserts the contents of the parentheses with the given name, more about it in the chapter Capturing groups

- $$ inserts character $

**Searching: str.match**

If the regular expression has flag g, it returns an array of all matches:

```
let str = "We will, we will rock you";

alert( str.match(/we/gi) ); // We,we (an array of 2 substrings that match)
```

If there’s no such flag it returns only the first match in the form of an array, with the full match at index 0 and some additional details in properties:

```let str = "We will, we will rock you";

let result = str.match(/we/i); // without flag g

alert( result[0] ); // We (1st match)
alert( result.length ); // 1

// Details:
alert( result.index ); // 0 (position of the match)
alert( result.input ); // We will, we will rock you (source string)
```

And, finally, if there are no matches, null is returned (doesn’t matter if there’s flag g or not).

This a very important nuance. If there are no matches, we don’t receive an empty array, but instead receive null. Forgetting about that may lead to errors, e.g.:

```
let matches = "JavaScript".match(/HTML/); // = null

if (!matches.length) { // Error: Cannot read property 'length' of null
alert("Error in the line above");
}
```

===

### Character classes


- A character class is a special notation that matches any symbol from a certain set.

- For the start, let’s explore the “digit” class. It’s written as \d and corresponds to “any single digit”.

- For instance, let’s find the first digit in the phone number:


\d (“d” is from “digit”)
    A digit: a character from 0 to 9.

\s (“s” is from “space”)
    A space symbol: includes spaces, tabs \t, newlines \n and few other rare characters, such as \v, \f and \r.

\w (“w” is from “word”)
    A “wordly” character: either a letter of Latin alphabet or a digit or an underscore _. Non-Latin letters (like cyrillic or hindi) do not belong to \w.

### Inverse classes

The “inverse” means that it matches all other characters, for instance:

- \D
    Non-    digit: any character except \d, for instance a letter.
- \S
    Non-space: any character except \s, for instance a letter.
- \W
    Non-wordly character: anything but \w, e.g a non-latin letter or a space.


### A dot is “any character”
A dot . is a special character class that matches “any character except a newline”.

`alert( "Z".match(/./) ); // Z`

`alert( "A\nB".match(/A.B/) ); // null (no match)`

**Dot as literally any character with “s” flag**

There are many situations when we’d like a dot to mean literally “any character”, newline included.

That’s what flag s does. If a regexp has it, then a dot . matches literally any character:

alert( "A\nB".match(/A.B/s) ); // A\nB (match!)


**Pay attention to spaces**
Usually we pay little attention to spaces. For us strings 1-5 and 1 - 5 are nearly identical.

But if a regexp doesn’t take spaces into account, it may fail to work.

Let’s try to find digits separated by a hyphen:

`alert( "1 - 5".match(/\d-\d/) ); // null, no match!`

`alert( "1 - 5".match(/\d - \d/) ); // 1 - 5, now it works`
`// or we can use \s class:`
`alert( "1 - 5".match(/\d\s-\s\d/) ); // 1 - 5, also works`


### Unicode: flag "u" and class \p{...}

- JavaScript uses Unicode encoding for strings. Most characters are encoded with 2 bytes, but that allows to represent at most 65536 characters.

- That range is not big enough to encode all possible characters, that’s why some rare characters are encoded with 4 bytes, for instance like 𝒳 (mathematical X) or 😄 (a smile), some hieroglyphs and so on.

- So characters like a and ≈ occupy 2 bytes, while codes for 𝒳, 𝒴 and 😄 are longer, they have 4 bytes.

- Long time ago, when JavaScript language was created, Unicode encoding was simpler: there were no 4-byte characters. So, some language features still handle them incorrectly.

- For instance, length thinks that here are two characters:

`alert('😄'.length); // 2`
`alert('𝒳'.length); // 2`

[Ref] (https://javascript.info/regexp-unicode)

===

### Anchors: string start ^ and end $

- The caret ^ and dollar $ characters have special meaning in a regexp. They are called “anchors”.

- The caret ^ matches at the beginning of the text, and the dollar $ – at the end.

`let str1 = "Mary had a little lamb";`
`alert( /^Mary/.test(str1) ); // true`

- Similar to this, we can test if the string ends with snow using snow$:

`let str1 = "its fleece was white as snow";`
`alert( /snow$/.test(str1) ); // true`

===

### Multiline mode of anchors ^ $, flag "m"

- The multiline mode is enabled by the flag m.

- It only affects the behavior of ^ and $.

- In the multiline mode they match not only at the beginning and the end of the string, but also at start/end of line.


**Searching at line end $**

`let str = ``Winnie: 1`
`Piglet: 2`
`Eeyore: 3;`

`console.log( str.match(/\d$/gm) ); // 1,2,3`


===

### Word boundary: \b

- When the regexp engine (program module that implements searching for regexps) comes across \b, it checks that the position in the string is a word boundary.

- There are three different positions that qualify as word boundaries:

- At string start, if the first string character is a word character \w.
  Between two characters in the string, where one is a word character \w and the other is not.
  At string end, if the last string character is a word character \w.

- For instance, regexp \bJava\b will be found in Hello, Java!, where Java is a standalone word, but not in Hello, JavaScript!.

`alert( "Hello, Java!".match(/\bJava\b/) ); // Java`
`alert( "Hello, JavaScript!".match(/\bJava\b/) ); // null`


- So, it matches the pattern \bHello\b, because:

- At the beginning of the string matches the first test \b.
- Then matches the word Hello.
- Then the test \b matches again, as we’re between o and a comma.
- So the pattern \bHello\b would match, but not \bHell\b (because there’s no word boundary after l) and not Java!\b (because the        exclamation sign is not a wordly character \w, so there’s no word boundary after it).

[Ref] (https://javascript.info/regexp-boundary)

**Find the time**
The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00.

Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456.

P.S. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result.

`let sen = "Breakfast at 09:00 in the room 123:456."`
`sen.match(/\b\d\d:\d\d\b/g)`

===

### Escaping, special characters

As we’ve seen, a backslash \ is used to denote character classes, e.g. \d. So it’s a special character in regexps (just like in regular strings).

There are other special characters as well, that have special meaning in a regexp, such as **[ ] { } ( ) \ ^ $ . | ? * +** They are used to do more powerful searches.

Don’t try to remember the list – soon we’ll deal with each of them, and you’ll know them by heart automatically.

Escaping
Let’s say we want to find literally a dot. Not “any character”, but just a dot.

To use a special character as a regular one, prepend it with a backslash: \..

That’s also called “escaping a character”.

`alert( "Chapter 5.1".match(/\d\.\d/) ); // 5.1 (match!)`
`alert( "Chapter 511".match(/\d\.\d/) ); // null (looking for a real dot \.)`

**A slash**

A slash symbol '/' is not a special character, but in JavaScript it is used to open and close the regexp: /...pattern.../, so we should escape it too.

Here’s what a search for a slash '/' looks like:

`alert( "/".match(/\//) ); // '/'`

On the other hand, if we’re not using /.../, but create a regexp using new RegExp, then we don’t need to escape it:

`alert( "/".match(new RegExp("/")) ); // finds /`

To search for special characters [ \ ^ $ . | ? * + ( ) literally, we need to prepend them with a backslash \ (“escape them”).
We also need to escape / if we’re inside /.../ (but not inside new RegExp).
When passing a string to new RegExp, we need to double backslashes \\, cause string quotes consume one of them.


===

### Sets and ranges [...]

- Several characters or character classes inside square brackets […] mean to “search for any character among given”.

**Sets**
For instance, [eao] means any of the 3 characters: 'a', 'e', or 'o'.

That’s called a set. Sets can be used in a regexp along with regular characters:

// find [t or m], and then "op"
`alert( "Mop top".match(/[tm]op/gi) ); // "Mop", "top"`


// find "V", then [o or i], then "la"
`alert( "Voila".match(/V[oi]la/) ); // null, no matches`

The pattern searches for:

V,
then one of the letters [oi],
then la.
So there would be a match for Vola or Vila.

**Ranges**

Square brackets may also contain character ranges.

For instance, [a-z] is a character in range from a to z, and [0-5] is a digit from 0 to 5.

In the example below we’re searching for "x" followed by two digits or letters from A to F:

`alert( "Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) ); // xAF`

Character classes are shorthands for certain character sets
For instance:

\d – is the same as [0-9],
\w – is the same as [a-zA-Z0-9_],
\s – is the same as [\t\n\v\f\r ], plus few other rare Unicode space character

#### Excluding ranges

Besides normal ranges, there are “excluding” ranges that look like [^…].

They are denoted by a caret character ^ at the start and match any character except the given ones.

For instance:

[^aeyo] – any character except 'a', 'e', 'y' or 'o'.
[^0-9] – any character except a digit, the same as \D.
[^\s] – any non-space character, same as \S.

#### Escaping in […]

Usually when we want to find exactly a special character, we need to escape it like \.. And if we need a backslash, then we use \\, and so on.

In square brackets we can use the vast majority of special characters without escaping:

Symbols . + ( ) never need escaping.
A hyphen - is not escaped in the beginning or the end (where it does not define a range).
A caret ^ is only escaped in the beginning (where it means exclusion).
The closing square bracket ] is always escaped (if we need to look for that symbol).
In other words, all special characters are allowed without escaping, except when they mean something for square brackets.

A dot . inside square brackets means just a dot. The pattern [.,] would look for one of characters: either a dot or a comma.

In the example below the regexp [-().^+] looks for one of the characters -().^+:

// No need to escape
`let regexp = /[-().^+]/g;`

`alert( "1 + 2 - 3".match(regexp) ); // Matches +, -`


### Quantifiers +, *, ? and {n}

- A number is a sequence of 1 or more digits \d. To mark how many we need, we can append a quantifier.

**Quantity {n}**

The simplest quantifier is a number in curly braces: {n}.

A quantifier is appended to a character (or a character class, or a [...] set etc) and specifies how many we need.

It has a few advanced forms, let’s see examples:

The exact count: {5}
\d{5} denotes exactly 5 digits, the same as \d\d\d\d\d.

The range: {3,5}, match 3-5 times

A number is a sequence of one or more digits in a row. So the regexp is \d{1,}:


`let str = "+7(903)-123-45-67";`

`let numbers = str.match(/\d{1,}/g);`

`alert(numbers); // 7,903,123,45,67`

**Shorthands**

+
Means “one or more”, the same as {1,}.

For instance, \d+ looks for numbers:

?
Means “zero or one”, the same as {0,1}. In other words, it makes the symbol optional.

For instance, the pattern ou?r looks for o followed by zero or one u, and then r.

So, colou?r finds both color and colour:

*
Means “zero or more”, the same as {0,}. That is, the character may repeat any times or be absent.

For example, \d0* looks for a digit followed by any number of zeroes (may be many or none):


===

### Greedy and lazy quantifiers

Greedy
By default the regular expression engine tries to repeat the quantified character as many times as possible. For instance, \d+ consumes all possible digits. When it becomes impossible to consume more (no more digits or string end), then it continues to match the rest of the pattern. If there’s no match then it decreases the number of repetitions (backtracks) and tries again.

Lazy
Enabled by the question mark ? after the quantifier. The regexp engine tries to match the rest of the pattern before each repetition of the quantified character.



[Ref] (https://javascript.info/regexp-greedy-and-lazy)


### Capturing groups

A part of a pattern can be enclosed in parentheses (...). This is called a “capturing group”.

That has two effects:

- It allows to get a part of the match as a separate item in the result array.
- If we put a quantifier after the parentheses, it applies to the parentheses as a whole

Example: gogogo
Without parentheses, the pattern go+ means g character, followed by o repeated one or more times. For instance, goooo or gooooooooo.

Parentheses group characters together, so (go)+ means go, gogo, gogogo and so on.