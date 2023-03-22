// What are the pros and cons of promises over callbacks

/*

Below are the list of pros and cons of promises over callbacks,

Pros:

It avoids callback hell which is unreadable
Easy to write sequential asynchronous code with .then()
Easy to write parallel asynchronous code with Promise.all()
Solves some of the common problems of callbacks(call the callback too late, too early, many times and swallow errors/exceptions)
Cons:

It makes little complex code
You need to load a polyfill if ES6 is not supported

*/
