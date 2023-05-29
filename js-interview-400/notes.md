### What is lecical environnement?

- where variables and functions physically present.

### what is namespace?

namespacing is a technique used to organize code and prevent naming collisions between different parts of a program. Namespacing involves grouping related variables, functions, and other identifiers together under a unique name or identifier, which serves as a namespace for those elements.

For example, suppose you are building a web application that includes several JavaScript modules, each of which defines a function called getUserData(). Without namespacing, there would be a naming conflict between the different modules, and it would be difficult to know which function to call.

To solve this problem, you can use namespacing to group the functions together under a unique namespace. One way to do this is to define an object that serves as a namespace and add the functions as properties of that object. For example:

```
// Define a namespace object
const myApp = {};

// Define a function in the namespace
myApp.getUserData = function() {
  // ...
};

```

With this approach, you can call the getUserData() function as myApp.getUserData() to avoid naming conflicts.

Namespacing is a common technique in many programming languages, and it is especially useful in large applications where different modules or libraries may have overlapping names. By using unique namespaces, you can organize your code more effectively and avoid naming conflicts, which can help to reduce bugs and make your code more maintainable.

### **proto** vs prototype

- '**proto**', on the other hand, is a property of an object that points to its prototype.
  It is used to access an object's prototype chain.

Ref: (https://www.youtube.com/watch?v=DqGwxR_0d1M)

- 'prototype' is a property of a constructor function, and it is used to define the properties and methods that will be inherited by instances created with that constructor.

```[label](https://www.google.com/maps/place/Penser/%4011.3280257%2C77.7374096%2C3a%2C75y%2C61.81h%2C90t/data%3D%213m7%211e1%213m5%211sRhB_7zYNM7c_hOT6qKSCxg%212e0%216shttps%3A//streetviewpixels-pa.googleapis.com/v1/thumbnail%3Fpanoid%3DRhB_7zYNM7c_hOT6qKSCxg%26cb_client%3Dsearch.gws-prod.gps%26w%3D86%26h%3D86%26yaw%3D61.81389%26pitch%3D0%26thumbfov%3D100%217i13312%218i6656%214m7%213m6%211s0x3ba96fa20f222dd1%3A0xf871ca48da4e90a7%218m2%213d11.3280682%214d77.7374488%2110e5%2116s/g/11mqwmgly3)
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
}

const john = new Person('John');
john.greet(); // prints "Hello, my name is John"

```

### Event Propogation:

- [ref] (https://javascript.info/bubbling-and-capturing)

  **textContent:** is a property that retrieves or sets the text content of an element. It returns the plain text content of an element, including all its descendants, but without any HTML tags. It can also be used to change the text content of an element, replacing it with new text. For example, element.textContent = "new text";

  **innerHTML:** is a property that retrieves or sets the content of an element, including any HTML tags it contains. It returns the HTML content of an element as a string. It can also be used to change the content of an element, including adding or removing HTML tags. For example, element.innerHTML = "<h1>New heading</h1>";

  **innerText:** is a property similar to textContent, which returns only the text content of an element, excluding any HTML tags. However, it does not return the text content of hidden elements, and it also respects CSS styling that can change the display of text. It can also be used to change the text content of an element, replacing it with new text. For example, element.innerText = "new text";

  **text node:** is a type of DOM node that represents a piece of text within an HTML document. It is created automatically when text is added to an HTML element using one of the text manipulation properties or methods.

  **value:** is a property used to retrieve or set the value of a form element, such as an input or textarea element. It returns the current value of the form element as a string, which can be used to submit form data to a server. It can also be used to set the value of a form element. For example, inputElement.value = "new value";

**primitive**
In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.

**how to get frame in the page**

```
var theFrame = document.getElementsByTagName("frame")[0];
var theFrameDocument = theFrame.contentDocument || theFrame.contentWindow.document;
var button = theFrameDocument.getElementById("mybutton");

```

[reference] (https://stackoverflow.com/questions/14944699/accessing-the-document-object-of-a-frame-with-javascript)

## Build Tools:

Build tools are known as programs that automate the process of building an executable application from source code. This building process includes activities like compiling, linking, and packaging the code into an executable form, etc.

[Reference](https://themeselection.com/javascript-build-tools/)

### HTMLCollection v NodeList

**Additional note**
What is the difference between a HTMLCollection and a NodeList?
A HTMLCollection contains only element nodes (tags) and a NodeList contains all nodes.

**Most important node types:**

element node
attribute node
text node
comment node
node types

[reference](https://stackoverflow.com/questions/15763358/difference-between-htmlcollection-nodelists-and-arrays-of-objects)

### What we need to know?

- Need to experiement Progressive Web Application
- Service worker

### JS getter and setter

## [Reference](https://www.programiz.com/javascript/getter-setter)
