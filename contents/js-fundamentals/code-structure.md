## Code structure

### Statements

- Statements are syntax constructs and commands that perform actions.
- Statements can be separated with a semicolon.

`alert('Hello'); alert('World');`

- A semicolon may be omitted in most cases when a line break exists.
- JavaScript interprets the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.

> alert('Hello')
>
> alert('World')

- There are cases when a newline does not mean a semicolon. For example:

> alert(3 +
>
> 1
>
> / 2);

### Important

But there are situations where JavaScript “fails” to assume a semicolon where it is really needed.

Errors which occur in such cases are quite hard to find and fix.

### An example of an error

If you’re curious to see a concrete example of such an error, check this code out:

> alert("Hello");
>
> [1, 2].forEach(alert);

No need to think about the meaning of the brackets [] and forEach yet. We’ll study them later. For now, just remember the result of running the code: it shows Hello, then 1, then 2.

Now let’s remove the semicolon after the alert:

> alert("Hello")
>
> [1, 2].forEach(alert);

The difference compared to the code above is only one character: the semicolon at the end of the first line is gone.

If we run this code, only the first Hello shows (and there’s an error, you may need to open the console to see it). There are no numbers any more.

That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement.

Here’s how the engine sees it:

> alert("Hello")[1, 2].forEach(alert);

Looks weird, right? Such merging in this case is just wrong. We need to put a semicolon after alert for the code to work correctly.

This can happen in other situations also.

**We recommend putting semicolons between statements even if they are separated by newlines. This rule is widely adopted by the community. Let’s note once again – it is possible to leave out semicolons most of the time. But it’s safer – especially for a beginner – to use them.**

### Comments

- programs become more and more complex. It becomes necessary to add comments which describe what the code does and why.

Comments can be put into any place of a script. They don’t affect its execution because the engine simply ignores them.

##### One-line comments start with two forward slash characters //.

The rest of the line is a comment. It may occupy a full line of its own or follow a statement.

Like here:

> // This comment occupies a line of its own
> alert('Hello');

> alert('World'); // This comment follows the statement

#### Multiline comments start with a forward slash and an asterisk /_ and end with an asterisk and a forward slash _/.

Like this:

> /\* An example with two messages.
>
> This is a multiline comment.
>
> \*/
>
> alert('Hello');
>
> alert('World');

#### Nested comments are not supported!

There may not be /_..._/ inside another /_..._/.

Such code will die with an error:
