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


