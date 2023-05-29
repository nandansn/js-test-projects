// what is weakset?

/**
 * In JavaScript, a WeakSet is a built-in object that allows you to store a collection of weakly held object references. Unlike a Set, the references in a WeakSet are weakly held, which means that they do not prevent the garbage collector from reclaiming the object if there are no other strong references to it.

You can use a WeakSet in situations where you need to keep track of a set of objects that are not required to persist in memory for the entire lifetime of your application. This is useful in cases where you want to associate metadata with an object, but you do not want to prevent the garbage collector from reclaiming the object when it is no longer needed.

Caching: You can use a WeakSet to cache expensive-to-create objects, such as DOM elements or images. This allows you to reuse the objects if they are still in memory, but allows the garbage collector to reclaim them if they are not.

Event listeners: You can use a WeakSet to keep track of event listeners that are added to an object. This ensures that the event listeners are automatically removed when the object is garbage collected.

Memoization: You can use a WeakSet to implement memoization of function results. This allows you to cache function results for a particular set of inputs, but allows the results to be reclaimed if the inputs are no longer in use.
 */

const eventListeners = new WeakSet();

function addEventListener(element, type, listener) {
  element.addEventListener(type, listener);
  eventListeners.add(listener);
}

function removeEventListener(element, type, listener) {
  element.removeEventListener(type, listener);
  eventListeners.delete(listener);
}

/**
 * 
Sure! Here's an example of how you could use a WeakSet to keep track of event listeners:

javascript
Copy code
const eventListeners = new WeakSet();

function addEventListener(element, type, listener) {
  element.addEventListener(type, listener);
  eventListeners.add(listener);
}

function removeEventListener(element, type, listener) {
  element.removeEventListener(type, listener);
  eventListeners.delete(listener);
}
In this example, we define two functions addEventListener and removeEventListener. When an event listener is added to an element using addEventListener, we also add the listener to the eventListeners WeakSet using the add method. Similarly, when an event listener is removed from an element using removeEventListener, we also remove the listener from the eventListeners WeakSet using the delete method.

By adding the event listeners to a WeakSet, we ensure that they are automatically removed from the set and eligible for garbage collection when they are no longer referenced by any other part of our code. This prevents memory leaks caused by retaining unnecessary event listeners in memory.

Note that in this example, we assume that the listener function is not referenced anywhere else in our code, since WeakSets only hold weak references. If the listener function is referenced elsewhere in our code, it will not be garbage collected even if it is removed from the WeakSet.
 */
