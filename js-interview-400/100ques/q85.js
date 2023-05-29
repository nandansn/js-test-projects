// What is an event flow

/*

Event flow is the order in which event is received on the web page. When you click an element that is nested in various other elements, 
before your click actually reaches its destination, or target element, it must trigger the click event for each of its parent elements first, 
starting at the top with the global window object. There are two ways of event flow

Top to Bottom(Event Capturing)
Bottom to Top (Event Bubbling)

*/
