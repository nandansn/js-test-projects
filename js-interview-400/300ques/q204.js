// What are the differences between WeakSet and Set

/**
 * The main difference is that references to objects in Set are strong while references to objects in WeakSet are weak. i.e, An object in WeakSet can be garbage collected if there is no other reference to it. Other differences are,

Sets can store any value Whereas WeakSets can store only collections of objects
WeakSet does not have size property unlike Set
WeakSet does not have methods such as clear, keys, values, entries, forEach.
WeakSet is not iterable.
 */
