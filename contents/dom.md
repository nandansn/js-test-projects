## DOM

- select an element or group of element.
- decide the effect we want to apply to the element.

### Window object overview

- browser api, gives api to work with browser.
- window refers to current browser tab
- document is with in the window object
- to check the property of the document you can use console.dir(document)
- each element has style property, with in the style property we have many css properties. we can check the supported css properties for an element in the console and apply the effect accordingly


### getElementById

- id refers to the unique value of the element in the page.
- returns the object type

#### EXE

- getElementById and apply different styles.

### getElementsByTagName

- select method to select element or group of elements,
- returns HTMLCollection - array like object
- index, length property not array methods.
- we can't use forEach
- turn them into array and use array methods
- use spread operator [...htmlCollections] or Array.from(htmlCollections)
- use console.dir(element) to list the properties

### getElementsByClassName

- select list of element, that matches the className passed to the function.
- the function returns the HTMLCollection

### querySelectorAll
 - node-list => objects are collection of nodes
 - can run forEach
 - turn them into array - spread operator [...]
 - after that can use any array properties
 - Only the NodeList object can contain attribute nodes and text nodes.
 - When you want to access the text node use the querySelector
 - Diff: ref: https://stackoverflow.com/questions/15763358/difference-between-htmlcollection-nodelists-and-arrays-of-objects

 ### How to use xpath?

 - document.evaluate('//body', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

 [References] (https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate)

 ### Navigating the DOM

 - childNodes - returns all childnodes including whitespace, which is treated as text nodes,

 - children - returns non-whitespace nodes

 - firstChild

 - lastChild 

 - parentElement - property returns the parent element of the selected element

 - nextSibling - returns the sibling after the selected element, this may return the textNodes as sibling if exist
 
 - previousSibling - returns the sibling before the selected element, this may return the textNodes as sibling if exist

 - nextElementSibling - returns the next element not the text or comment nodes.

 - previousElementSibling - returns the previous element not the text or comment nodes.

 - nodeValue - returns the text value in the element. you need to use firstChild of index and then nodeValue property

 - textContent - property used to get the text value directly from the element

 ### attributes, getAttribute, setAttribute

 - html element attribute
 - we can use the get and sett attribute method to update or access the attribute of the element, 

 ### classList and className

 - adding css class dynamically
 - we cann apply multiple classes on the element using the classList property and add method.
 - we can remove multiple classes on the element using the classList property and remove method.
 - we can check availability of a class on the element using the classList property and contains method.

 > element.classLit.add('classOne');
 >
 > element.classLit.add('classTwo');
 >
 > element.classLit.remove('classTwo');

 ### createElement, createTextNode, appendChild

 - createElement method is used to create new element in the document
 - use appendChild method add the newly created element under specific html element
 - use createTextNode method to add text with in the element, we have to use append child method to add textNode in the element

 ### inserBefore,
 - method to insert the element, before the specified element.
 - document.body.insertBefore('elementToBeInserted','beforeWhichElement')

 ### replaceChild,
 - method to replace the old element with new element.
 - document.body.replaceChild(newElement, oldElement)
 - note: you need to create new element and you have to replace with existing element

 ### prepend
 - method to add element before the element

 ### removeChild, remove

 - remove method in the element is used to remove from document
 - select the element, apply the remove method on the selected element.
 - remove child method is to remove the child with in the selected parent element.

 ### innerHTML and textContent

- you can use innetHTML to add element with html syntax.

### style 

- dynamically you can change the style using the style property in the specific element.

### Events
- Events are used to make the website interactive
- only few of them covered
- we need to understand the principle of the events
 
 #### click event,
 - simple event, clicking some kind of element.
 - event handling :
    - select the element
    - addEventListener(), 2 args, what is the event, how to handle the event or what to do when the event occurs.

#### mouseevents
- fires after full action occurs
- mousedown - button is pressed
- mouseup - button is released
- mouseenter - moved onto an element
- mouseleave - moved out of an element

#### key events
- keypress - when key is pressed
- keydown - when key is down
- keyup - when key is released

#### EventObject
- in the call back function we can get the event object as an argument
- this event object has the info about the event triggered
- event.currentTarget, has the element that triggered the event
- preventDefault method ignores the default behaviour of the element.

### currentTarget vs target
- currentTarget refers to the element to which the event handler (addEventListener) has been attached.
- target identifies the element on which the event triggered
- eventhough the button performs click action there could be span element, within the button, in the code it is implemented like, where click event attached to button, but further action may happen only when the 
evet.target === span text satisfied.
- currentTarget refers 'this'

- [Reference] (https://javascript.info/bubbling-and-capturing)

### EventCapturing and EventBubbling

- this allows to select the element dynamically.
- event propogation - order the events are fired
- event bubbling - When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
For instance, a focus event does not bubble. There are other examples too, we’ll meet them. But still it’s an exception, rather than a rule, most events do bubble.
clicked element first then bubbles up, this is default behaviour, we can override the default behaviour, we can use stopPropogation() method in the event object and stop the bubbling up functionality.
- event capturing - fires at the root and fires until reaches the target

### Forms

- submit event listener
- prevent default
- how to gee the values
- when we are submitting the form we are not only sending the data also we are refreshing the page, when page refreshed, it is imposible to get the values, to prevent this, we can use event.preventDefault()

### Local vs storage

- web storage api - provided by browser
- session storage, local storage
 - setItem, getItem, removeItem, clear
 - localstorage keeps the data until the browser is closed, when u open new tabs still the values in the local storage exists, when you open the new browser the saved the value in the local storage exists
 - session storage keeps the data in single tab/single session when you open the new tab the values will not be available in the new tab

### Locatstorage with multiple values

- JSON.stringify() - use to store the multiple values  like array
- JSON.parse() - use parse method to get the values.

### setTimeout

- on window object
- we can pass function as references, 
- used to execute the function passed to setTimeout after specified time
- returns unique identifier
- clearTimeout to cancel
- duration in ms (1000 milliseconds = 1 second)
- you can pass arguments to referenced function like, setTimeout(refFunction, timeout, '1','2')
- clearTimeout to cancel the setTimeout

### setInterval 
- runs the referenced function periodically at specific intervals.
- setInterval(refFunction, timeInterval, '1','2')
- clearInterval use to cancel the setInterval

### DOMContentLoaded
- event fires when the initial document has been completely loaded and parsed, without waiting for stylesheets, images and subframes to finish loading.

### load event
-   the load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resource to finish loading.

### scroll event
- this event occurs when we do horizontal or vertical scrolling,
- to track the ui x and y co-ordinates use

### width, height properties, getBoundingClientRect method
- innerWidth - inner width of the window
- innerHeight - inner height of the window
- these properties will be used when we want to our UI to react according to the window sizing.
- getBoundingClientRect to get the (top, bottom, left, right margins, width, height dizes, x,y coords) of an element

### resize event
- resize event triggeres when we resize the browser windows
