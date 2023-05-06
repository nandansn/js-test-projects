/**
 * What is a proxy object
 *
 * The Proxy object is used to define custom behavior for fundamental operations such as property lookup, assignment, enumeration, function invocation, etc. The syntax would be as follows,
 *
 */

var p = new Proxy(target, handler);

var handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 100;
  },
};

var p = new Proxy({}, handler);
p.a = 10;
p.b = null;

console.log(p.a, p.b); // 10, null
console.log("c" in p, p.c); // false, 100

// In the above code, it uses get handler which define the behavior of the proxy when an operation is performed on it
