## DOM

- select an element or group of element.
- decide the effect we want to apply to the element.

### Window object

- browser api
- window refers to current browser tab
- document is with in the window object
- to check the property of the document you can use console.dir(document)


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

### querySelectorAll
 - node-list => objects are collection of nodes
 - can run forEach
 - turn then into array - spread operator [...]
 - after that can use any array properties
 - Only the NodeList object can contain attribute nodes and text nodes.
 - When you want to access the text node use the querySelector
 - Diff: ref: https://stackoverflow.com/questions/15763358/difference-between-htmlcollection-nodelists-and-arrays-of-objects