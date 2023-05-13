// What are the differences between WeakMap and Map

/**
 * The main difference is that references to key objects in Map are strong while references to key objects in WeakMap are weak. i.e, A key object in WeakMap can be garbage collected if there is no other reference to it. Other differences are,

Maps can store any key type Whereas WeakMaps can store only collections of key objects
WeakMap does not have size property unlike Map
WeakMap does not have methods such as clear, keys, values, entries, forEach.
WeakMap is not iterable.
 */