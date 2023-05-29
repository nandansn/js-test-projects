// What is BOM

/*
The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. It consists of the objects navigator, history, screen, location and document which are children of the window. T
he Browser Object Model is not standardized and can change based on different browsers.

The Window Object

The window object is supported by all browsers. It represents the browser's window.

All global JavaScript objects, functions, and variables automatically become members of the window object.

Global variables are properties of the window object.

Global functions are methods of the window object.

Even the document object (of the HTML DOM) is a property of the window object:


Window Screen:

screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth

Window Location
The window.location object can be written without the window prefix.

window.location.href returns the href (URL) of the current page
window.location.hostname returns the domain name of the web host
window.location.pathname returns the path and filename of the current page
window.location.protocol returns the web protocol used (http: or https:)
window.location.assign() loads a new document

The window.history object contains the browsers history.

The window.history object can be written without the window prefix.

To protect the privacy of the users, there are limitations to how JavaScript can access this object.

Some methods:

history.back() - same as clicking back in the browser
history.forward() - same as clicking forward in the browser

The window.navigator object contains information about the visitor's browser.

Window Navigator
The window.navigator object can be written without the window prefix.

Some examples:

navigator.cookieEnabled
navigator.appCodeName
navigator.platform

Timing Events
The window object allows execution of code at specified time intervals.

These time intervals are called timing events.

The two key methods to use with JavaScript are:

setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.

setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.

Alert Box
An alert box is often used if you want to make sure information comes through to the user.

When an alert box pops up, the user will have to click "OK" to proceed.

Syntax
window.alert("sometext");
The window.alert() method can be written without the window prefix.

*/
