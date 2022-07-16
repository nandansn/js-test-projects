## Error Handling

### Basics:

- No matter how great we are at programming, sometimes our scripts have errors.
- They may occur because of our mistakes, an unexpected user input, an erroneous server response, and for a thousand other reasons.
- Usually, a script “dies” (immediately stops) in case of an error, printing it to console.
- But there’s a syntax construct try...catch that allows us to “catch” errors so the script can, instead of dying, do something more reasonable.

### try ... catch syntax:

> try {
> // code...
> } catch (err) {
> // error handling
> }

- it works like this:

  - First, the code in try {...} is executed.
  - If there were no errors, then catch (err) is ignored: the execution reaches the end of try and goes on, skipping catch.
  - If an error occurs, then the try execution is stopped, and control flows to the beginning of catch (err). The err variable (we can use any name for it) will contain an error object with details about what happened.

- Note 1:
  - try...catch only works for runtime errors, means: the code must be runnable. In other words, it should be valid JavaScript. It won’t work if the code is syntactically wrong, for instance it has unmatched curly braces:
    > try {
    > {{{{{{{{{{{{
    > } catch (err) {
    > alert("The engine can't understand this code, it's invalid");
    > }
  - The JavaScript engine first reads the code, and then runs it. The errors that occur on the reading phase are called “parse-time” errors and are unrecoverable (from inside that code). That’s because the engine can’t understand the code.So, try...catch can only handle errors that occur in valid code. Such errors are called “runtime errors” or, sometimes, “exceptions”.
- Note 2:
  - try...catch works synchronously
  - If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:
    > try {
    > setTimeout(function() {
    > noSuchVariable; // script will die here
    > }, 1000);
    > } catch (err) {
    > alert( "won't work" );
    > }
- That’s because the function itself is executed later, when the engine has already left the try...catch construct.
- To catch an exception inside a scheduled function, try...catch must be inside that function:
  - code:
    > setTimeout(function() {
    > try {
    > noSuchVariable; // try...catch handles the error!
    > } catch {
    > alert( "error is caught here!" );
    > }
    > }, 1000);

### Error Object:

- When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch

  > try {
  > // ...
  > } catch (err) { // <-- the "error object", could use another word instead of err
  > // ...
  > }

- For all built-in errors, the error object has two main properties:
  - name: Error name. For instance, for an undefined variable that’s "ReferenceError"
  - message: Textual message about error details.
  - stack: Current call stack: a string with information about the sequence of nested calls that led to the error. Used for debugging purposes.

### Optional “catch” binding

If we don’t need error details, catch may omit it:

> try {
> // ...
> } catch { // <-- without (err)
> // ...
> }

### “Throw” operator

- The throw operator generates an error.
  > throw <error object>
- Technically, we can use anything as an error object. That may be even a primitive, like a number or a string, but it’s better to use objects, preferably with name and message properties (to stay somewhat compatible with built-in errors).

- JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others. We can use them to create error objects as well.

> let error = new Error(message);
> // or
> let error = new SyntaxError(message);
> let error = new ReferenceError(message);

### try…catch…finally

- The try...catch construct may have one more code clause: finally.

- If it exists, it runs in all cases:
  - after try, if there were no errors,
  - after catch, if there were errors.

> try {
> ... try to execute the code ...
> } catch (err) {
> ... handle errors ...
> } finally {
> ... execute always ...
> }

#### Note 1:

- Variables are local inside try...catch...finally
- Please note that variables in the try...catch. it would only be visible inside of it.

#### Note 2:

- finally and return
- The finally clause works for any exit from try...catch. That includes an explicit return.
- In the example below, there’s a return in try. In this case, finally is executed just before the control returns to the outer code.

> function func() {
> try {
> return 1;
> } catch (err) {
> /_ ... _/
> } finally {
> alert( 'finally' );
> }>
> }
> alert( func() ); // first works alert from finally, and then this one

#### Note 3:

- try...finally

- The try...finally construct, without catch clause, is also useful. We apply it when we don’t want to handle errors here (let them fall through), but want to be sure that processes that we started are finalized.

> function func() {
> // start doing something that needs completion (like measurements)
> try {
> // ...
> } finally {
> // complete that thing even if all dies
> }
> }

### Global catch

- Let’s imagine we’ve got a fatal error outside of try...catch, and the script died. Like a programming error or some other terrible thing.
- Is there a way to react on such occurrences? We may want to log the error, show something to the user (normally they don’t see error messages), etc.
- There is none in the specification, but environments usually provide it, because it’s really useful. For instance, Node.js has process.on("uncaughtException") for that. And in the browser we can assign a function to the special window.onerror property, that will run in case of an uncaught error.

The syntax:

> window.onerror = function(message, url, line, col, error) {
> // ...
> };

- They work like this:

  - We register at the service and get a piece of JS (or a script URL) from them to insert on pages.
  - That JS script sets a custom window.onerror function.
  - When an error occurs, it sends a network request about it to the service.
  - We can log in to the service web interface and see errors.

### Custom errors, extending Error

- When we develop something, we often need our own error classes to reflect specific things that may go wrong in our tasks. For errors in network operations we may need HttpError, for database operations DbError, for searching operations NotFoundError and so on.

- Our errors should support basic error properties like message, name and, preferably, stack. But they also may have other properties of their own, e.g. HttpError objects may have a statusCode property with a value like 404 or 403 or 500.

- JavaScript allows to use throw with any argument, so technically our custom error classes don’t need to inherit from Error. But if we inherit, then it becomes possible to use obj instanceof Error to identify error objects. So it’s better to inherit from it.

- As the application grows, our own errors naturally form a hierarchy. For instance, HttpTimeoutError may inherit from HttpError, and so on.

- Sample code for custom error:

> class ValidationError extends Error {
> constructor(message) {
> super(message);
> this.name = "ValidationError";
> }
> }

### Wrapping exceptions

- while handling the error with in catch use instanceof operator to check the type of Error object

- Design the CustomError in better, throw specific error, instead of throwing the generic custom error.

- Wrapping exceptions is a widespread technique: a function handles low-level exceptions and creates higher-level errors instead of various low-level ones. Low-level exceptions sometimes become properties of that object like err.cause in the examples above, but that’s not strictly required.-
