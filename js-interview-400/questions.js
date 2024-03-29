let q = {
  "0": "What are the possible ways to create objects in JavaScript",
  "1": "What is prototype chain",
  "2": "What is the difference between Call, Apply and Bind",
  "3": "What is JSON and its common operations",
  "4": "What is the purpose of the array slice method",
  "5": "What is the purpose of the array splice method",
  "6": "What is the difference between slice and splice",
  "7": "How do you compare Object and Map",
  "8": "What is the difference between == and === operators",
  "9": "What are lambda or arrow functions",
  "10": "What is a first class function",
  "11": "What is a first order function",
  "12": "What is a higher order function",
  "13": "What is a unary function",
  "14": "What is the currying function",
  "15": "What is a pure function",
  "16": "What is the purpose of the let keyword",
  "17": "What is the difference between let and var",
  "18": "What is the reason to choose the name let as a keyword",
  "19": "How do you redeclare variables in switch block without an error",
  "20": "What is the Temporal Dead Zone",
  "21": "What is IIFE(Immediately Invoked Function Expression)",
  "22": "How do you decode or encode a URL in JavaScript?",
  "23": "What is memoization",
  "24": "What is Hoisting",
  "25": "What are classes in ES6",
  "26": "What are closures",
  "27": "What are modules",
  "28": "Why do you need modules",
  "29": "What is scope in javascript",
  "30": "What is a service worker",
  "31": "How do you manipulate DOM using a service worker",
  "32": "How do you reuse information across service worker restarts",
  "33": "What is IndexedDB",
  "34": "What is web storage",
  "35": "What is a post message",
  "36": "What is a cookie",
  "37": "Why do you need a Cookie",
  "38": "What are the options in a cookie",
  "39": "How do you delete a cookie",
  "40": "What are the differences between cookie, local storage and session storage",
  "41": "What is the main difference between localStorage and sessionStorage",
  "42": "How do you access web storage",
  "43": "What are the methods available on session storage",
  "44": "What is a storage event and its event handler",
  "45": "Why do you need web storage",
  "46": "How do you check web storage browser support",
  "47": "How do you check web workers browser support",
  "48": "Give an example of a web worker",
  "49": "What are the restrictions of web workers on DOM",
  "50": "What is a promise",
  "51": "Why do you need a promise",
  "52": "What are the three states of promise",
  "53": "What is a callback function",
  "54": "Why do we need callbacks",
  "55": "What is a callback hell",
  "56": "What are server-sent events",
  "57": "How do you receive server-sent event notifications",
  "58": "How do you check browser support for server-sent events",
  "59": "What are the events available for server sent events",
  "60": "What are the main rules of promise",
  "61": "What is callback in callback",
  "62": "What is promise chaining",
  "63": "What is promise.all",
  "64": "What is the purpose of the race method in promise",
  "65": "What is a strict mode in javascript",
  "66": "Why do you need strict mode",
  "67": "How do you declare strict mode",
  "68": "What is the purpose of double exclamation",
  "69": "What is the purpose of the delete operator",
  "70": "What is typeof operator",
  "71": "What is undefined property",
  "72": "What is null value",
  "73": "What is the difference between null and undefined",
  "74": "What is eval",
  "75": "What is the difference between window and document",
  "76": "How do you access history in javascript",
  "77": "How do you detect caps lock key turned on or not",
  "78": "What is isNaN",
  "79": "What are the differences between undeclared and undefined variables",
  "80": "What are global variables",
  "81": "What are the problems with global variables",
  "82": "What is NaN property",
  "83": "What is the purpose of isFinite function",
  "84": "What is an event flow",
  "85": "What is event bubbling",
  "86": "What is event capturing",
  "87": "How do you submit a form using JavaScript",
  "88": "How do you find operating system details",
  "89": "What is the difference between document load and DOMContentLoaded events",
  "90": "What is the difference between native, host and user objects",
  "91": "What are the tools or techniques used for debugging JavaScript code",
  "92": "What are the pros and cons of promises over callbacks",
  "93": "What is the difference between an attribute and a property",
  "94": "What is same-origin policy",
  "95": "What is the purpose of void 0",
  "96": "Is JavaScript a compiled or interpreted language",
  "97": "Is JavaScript a case-sensitive language",
  "98": "Is there any relation between Java and JavaScript",
  "99": "What are events",
  "100": "Who created javascript",
  "101": "What is the use of preventDefault method",
  "102": "What is the use of stopPropagation method",
  "103": "What are the steps involved in return false usage",
  "104": "What is BOM",
  "105": "What is the use of setTimeout",
  "106": "What is the use of setInterval",
  "107": "Why is JavaScript treated as Single threaded",
  "108": "What is an event delegation",
  "109": "What is ECMAScript",
  "110": "What is JSON",
  "111": "What are the syntax rules of JSON",
  "112": "What is the purpose JSON stringify",
  "113": "How do you parse JSON string",
  "114": "Why do you need JSON",
  "115": "What are PWAs",
  "116": "What is the purpose of clearTimeout method",
  "117": "What is the purpose of clearInterval method",
  "118": "How do you redirect new page in javascript",
  "119": "How do you check whether a string contains a substring",
  "120": "How do you validate an email in javascript",
  "121": "How do you get the current url with javascript",
  "122": "What are the various url properties of location object",
  "123": "How do get query string values in javascript",
  "124": "How do you check if a key exists in an object",
  "125": "How do you loop through or enumerate javascript object",
  "126": "How do you test for an empty object",
  "127": "What is an arguments object",
  "128": "How do you make first letter of the string in an uppercase",
  "129": "What are the pros and cons of for loop",
  "130": "How do you display the current date in javascript",
  "131": "How do you compare two date objects",
  "132": "How do you check if a string starts with another string",
  "133": "How do you trim a string in javascript",
  "134": "How do you add a key value pair in javascript",
  "135": "Is the '!--' notation represents a special operator",
  "136": "How do you assign default values to variables",
  "137": "How do you define multiline strings",
  "138": "What is an app shell model",
  "139": "Can we define properties for functions",
  "140": "What is the way to find the number of parameters expected by a function",
  "141": "What is a polyfill",
  "142": "What are break and continue statements",
  "143": "What are js labels",
  "144": "What are the benefits of keeping declarations at the top",
  "145": "What are the benefits of initializing variables",
  "146": "What are the recommendations to create new object",
  "147": "How do you define JSON arrays",
  "148": "How do you generate random integers",
  "149": "Can you write a random integers function to print integers with in a range",
  "150": "What is tree shaking",
  "151": "What is the need of tree shaking",
  "152": "Is it recommended to use eval",
  "153": "What is a Regular Expression",
  "154": "What are the string methods available in Regular expression",
  "155": "What are modifiers in regular expression",
  "156": "What are regular expression patterns",
  "157": "What is a RegExp object",
  "158": "How do you search a string for a pattern",
  "159": "What is the purpose of exec method",
  "160": "How do you change the style of a HTML element",
  "161": "What would be the result of 1+2+'3'",
  "162": "What is a debugger statement",
  "163": "What is the purpose of breakpoints in debugging",
  "164": "Can I use reserved words as identifiers",
  "165": "How do you detect a mobile browser",
  "166": "How do you detect a mobile browser without regexp",
  "167": "How do you get the image width and height using JS",
  "168": "How do you make synchronous HTTP request",
  "169": "How do you make asynchronous HTTP request",
  "170": "How do you convert date to another timezone in javascript",
  "171": "What are the properties used to get size of window",
  "172": "What is a conditional operator in javascript",
  "173": "Can you apply chaining on conditional operator",
  "174": "What are the ways to execute javascript after page load",
  "175": "What is the difference between proto and prototype",
  "176": "Give an example where do you really need semicolon",
  "177": "What is a freeze method",
  "178": "What is the purpose of freeze method",
  "179": "Why do I need to use freeze method",
  "180": "How do you detect a browser language preference",
  "181": "How to convert string to title case with javascript",
  "182": "How do you detect javascript disabled in the page",
  "183": "What are various operators supported by javascript",
  "184": "What is a rest parameter",
  "185": "What happens if you do not use rest parameter as a last argument",
  "186": "What are the bitwise operators available in javascript",
  "187": "What is a spread operator",
  "188": "How do you determine whether object is frozen or not",
  "189": "How do you determine two values same or not using object",
  "190": "What is the purpose of using object is method",
  "191": "How do you copy properties from one object to other",
  "192": "What are the applications of assign method",
  "193": "What is a proxy object",
  "194": "What is the purpose of seal method",
  "195": "What are the applications of seal method",
  "196": "What are the differences between freeze and seal methods",
  "197": "How do you determine if an object is sealed or not",
  "198": "How do you get enumerable key and value pairs",
  "199": "What is the main difference between Object.values and Object.entries method",
  "200": "How can you get the list of keys of any object",
  "201": "How do you create an object with prototype",
  "202": "What is a WeakSet",
  "203": "What are the differences between WeakSet and Set",
  "204": "List down the collection of methods available on WeakSet",
  "205": "What is a WeakMap",
  "206": "What are the differences between WeakMap and Map",
  "207": "List down the collection of methods available on WeakMap",
  "208": "What is the purpose of uneval",
  "209": "How do you encode an URL",
  "210": "How do you decode an URL",
  "211": "How do you print the contents of web page",
  "212": "What is the difference between uneval and eval",
  "213": "What is an anonymous function",
  "214": "What is the precedence order between local and global variables",
  "215": "What are javascript accessors",
  "216": "How do you define property on Object constructor",
  "217": "What is the difference between get and defineProperty",
  "218": "What are the advantages of Getters and Setters",
  "219": "Can I add getters and setters using defineProperty method",
  "220": "What is the purpose of switch-case",
  "221": "What are the conventions to be followed for the usage of switch case",
  "222": "What are primitive data types",
  "223": "What are the different ways to access object properties",
  "224": "What are the function parameter rules",
  "225": "What is an error object",
  "226": "When you get a syntax error",
  "227": "What are the different error names from error object",
  "228": "What are the various statements in error handling",
  "229": "What are the two types of loops in javascript",
  "230": "What is nodejs",
  "231": "What is an Intl object",
  "232": "How do you perform language specific date and time formatting",
  "233": "What is an Iterator",
  "234": "How does synchronous iteration works",
  "235": "What is an event loop",
  "236": "What is call stack",
  "237": "What is an event queue",
  "238": "What is a decorator",
  "239": "What are the properties of Intl object",
  "240": "What is an Unary operator",
  "241": "How do you sort elements in an array",
  "242": "What is the purpose of compareFunction while sorting arrays",
  "243": "How do you reversing an array",
  "244": "How do you find min and max value in an array",
  "245": "How do you find min and max values without Math functions",
  "246": "What is an empty statement and purpose of it",
  "247": "How do you get metadata of a module",
  "248": "What is a comma operator",
  "249": "What is the advantage of a comma operator",
  "250": "What is typescript",
  "251": "What are the differences between javascript and typescript",
  "252": "What are the advantages of typescript over javascript",
  "253": "What is an object initializer",
  "254": "What is a constructor method",
  "255": "What happens if you write constructor more than once in a class",
  "256": "How do you call the constructor of a parent class",
  "257": "How do you get the prototype of an object",
  "258": "What happens If I pass string type for getPrototype method",
  "259": "How do you set prototype of one object to another",
  "260": "How do you check whether an object can be extendable or not",
  "261": "How do you prevent an object to extend",
  "262": "What are the different ways to make an object non-extensible",
  "263": "How do you define multiple properties on an object",
  "264": "What is MEAN in javascript",
  "265": "What Is Obfuscation in javascript",
  "266": "Why do you need Obfuscation",
  "267": "What is Minification",
  "268": "What are the advantages of minification",
  "269": "What are the differences between Obfuscation and Encryption",
  "270": "What are the common tools used for minification",
  "271": "How do you perform form validation using javascript",
  "272": "How do you perform form validation without javascript",
  "273": "What are the DOM methods available for constraint validation",
  "274": "What are the available constraint validation DOM properties",
  "275": "What are the list of validity properties",
  "276": "Give an example usage of rangeOverflow property",
  "277": "Is enums feature available in javascript",
  "278": "What is an enum",
  "279": "How do you list all properties of an object",
  "280": "How do you get property descriptors of an object",
  "281": "What are the attributes provided by a property descriptor",
  "282": "How do you extend classes",
  "283": "How do I modify the url without reloading the page",
  "284": "How do you check whether an array includes a particular value or not",
  "285": "How do you compare scalar arrays",
  "286": "How to get the value from get parameters",
  "287": "How do you print numbers with commas as thousand separators",
  "288": "What is the difference between java and javascript",
  "289": "Does javascript supports namespace",
  "290": "How do you declare namespace",
  "291": "How do you invoke javascript code in an iframe from parent page",
  "292": "How do get the timezone offset from date",
  "293": "How do you load CSS and JS files dynamically",
  "294": "What are the different methods to find HTML elements in DOM",
  "295": "What is jQuery",
  "296": "What is V8 JavaScript engine",
  "297": "Why do we call javascript as dynamic language",
  "298": "What is a void operator",
  "299": "How to set the cursor to wait",
  "300": "How do you create an infinite loop",
  "301": "Why do you need to avoid with statement",
  "302": "What is the output of below for loops",
  "303": "List down some of the features of ES6",
  "304": "What is ES6",
  "305": "Can I redeclare let and const variables",
  "306": "Is const variable makes the value immutable",
  "307": "What are default parameters",
  "308": "What are template literals",
  "309": "How do you write multi-line strings in template literals",
  "310": "What are nesting templates",
  "311": "What are tagged templates",
  "312": "What are raw strings",
  "313": "What is destructuring assignment",
  "314": "What are default values in destructuring assignment",
  "315": "How do you swap variables in destructuring assignment",
  "316": "What are enhanced object literals",
  "317": "What are dynamic imports",
  "318": "What are the use cases for dynamic imports",
  "319": "What are typed arrays",
  "320": "What are the advantages of module loaders",
  "321": "What is collation",
  "322": "What is for...of statement",
  "323": "What is the output of below spread operator array",
  "324": "Is PostMessage secure",
  "325": "What are the problems with postmessage target origin as wildcard",
  "326": "How do you avoid receiving postMessages from attackers",
  "327": "Can I avoid using postMessages completely",
  "328": "Is postMessages synchronous",
  "329": "What paradigm is Javascript",
  "330": "What is the difference between internal and external javascript",
  "331": "Is JavaScript faster than server side script",
  "332": "How do you get the status of a checkbox",
  "333": "What is the purpose of double tilde operator",
  "334": "How do you convert character to ASCII code",
  "335": "What is ArrayBuffer",
  "336": "What is the output of below string expression",
  "337": "What is the purpose of Error object",
  "338": "What is the purpose of EvalError object",
  "339": "What are the list of cases error thrown from non-strict mode to strict mode",
  "340": "Do all objects have prototypes",
  "341": "What is the difference between a parameter and an argument",
  "342": "What is the purpose of some method in arrays",
  "343": "How do you combine two or more arrays",
  "344": "What is the difference between Shallow and Deep copy",
  "345": "How do you create specific number of copies of a string",
  "346": "How do you return all matching strings against a regular expression",
  "347": "How do you trim a string at the beginning or ending",
  "348": "What is the output of below console statement with unary operator",
  "349": "Does javascript uses mixins",
  "350": "What is a thunk function",
  "351": "What are asynchronous thunks",
  "352": "What is the output of below function calls",
  "353": "How to remove all line breaks from a string",
  "354": "What is the difference between reflow and repaint",
  "355": "What happens with negating an array",
  "356": "What happens if we add two arrays",
  "357": "What is the output of prepend additive operator on falsy values",
  "358": "How do you create self string using special characters",
  "359": "How do you remove falsy values from an array",
  "360": "How do you get unique values of an array",
  "361": "What is destructuring aliases",
  "362": "How do you map the array values without using map method",
  "363": "How do you empty an array",
  "364": "How do you rounding numbers to certain decimals",
  "365": "What is the easiest way to convert an array to an object",
  "366": "How do you create an array with some data",
  "367": "What are the placeholders from console object",
  "368": "Is it possible to add CSS to console messages",
  "369": "What is the purpose of dir method of console object",
  "370": "Is it possible to debug HTML elements in console",
  "371": "How do you display data in a tabular format using console object",
  "372": "How do you verify that an argument is a Number or not",
  "373": "How do you create copy to clipboard button",
  "374": "What is the shortcut to get timestamp",
  "375": "How do you flattening multi dimensional arrays",
  "376": "What is the easiest multi condition checking",
  "377": "How do you capture browser back button",
  "378": "How do you disable right click in the web page",
  "379": "What are wrapper objects",
  "380": "What is AJAX",
  "381": "What are the different ways to deal with Asynchronous Code",
  "382": "How to cancel a fetch request",
  "383": "What is web speech API",
  "384": "What is minimum timeout throttling",
  "385": "How do you implement zero timeout in modern browsers",
  "386": "What are tasks in event loop",
  "387": "What is microtask",
  "388": "What are different event loops",
  "389": "What is the purpose of queueMicrotask",
  "390": "How do you use javascript libraries in typescript file",
  "391": "What are the differences between promises and observables",
  "392": "What is heap",
  "393": "What is an event table",
  "394": "What is a microTask queue",
  "395": "What is the difference between shim and polyfill",
  "396": "How do you detect primitive or non primitive value type",
  "397": "What is babel",
  "398": "Is Node.js completely single threaded",
  "399": "What are the common use cases of observables",
  "400": "What is RxJS",
  "401": "What is the difference between Function constructor and function declaration",
  "402": "What is a Short circuit condition",
  "403": "What is the easiest way to resize an array",
  "404": "What is an observable",
  "405": "What is the difference between function and class declarations",
  "406": "What is an async function",
  "407": "How do you prevent promises swallowing errors",
  "408": "What is deno",
  "409": "How do you make an object iterable in javascript",
  "410": "What is a Proper Tail Call",
  "411": "How do you check an object is a promise or not",
  "412": "How to detect if a function is called as constructor",
  "413": "What are the differences between arguments object and rest parameter",
  "414": "What are the differences between spread operator and rest parameter",
  "415": "What are the different kinds of generators",
  "416": "What are the built-in iterables",
  "417": "What are the differences between for...of and for...in statements",
  "418": "How do you define instance and non-instance properties",
  "419": "What is the difference between isNaN and Number.isNaN?",
  "420": "How to invoke an IIFE without any extra brackets?",
  "421": "Is that possible to use expressions in switch cases?",
  "422": "What is the easiest way to ignore promise errors?",
  "423": "How do style the console output using CSS?",
  "424": "What is nullish coalescing operator (??)?",
  "425": "How do you group and nest console output?",
  "426": "What is the difference between dense and sparse arrays?",
  "427": "What are the different ways to create sparse arrays?",
  "428": "What is the difference between setTimeout, setImmediate and process.nextTick?",
  "429": "How do you reverse an array without modifying original array?",
  "430": "How do you create custom HTML element?",
  "431": "What is global execution context?",
  "432": "What is function execution context?",
  "433": "What is debouncing?",
  "434": "What is throttling?",
  "435": "What is optional chaining?",
  "436": "What is an environment record?",
  "437": "How to verify if a variable is an array?",
  "438": "What is pass by value and pass by reference?",
  "439": "What are the differences between primitives and non-primitives?",
  "440": "What are hidden classes?",
  "441": "What is inline caching?",
  "442": "How do you create your own bind method using either call or apply method?",
  "443": "What are the differences between pure and impure functions?",
  "444": "What is referential transparency?",
  "445": "What are the possible side-effects in javascript?",
  "446": "What are compose and pipe functions?",
  "447": "What is module pattern?",
  "448": "What is Functon Composition?",
  "449": "How to use await outside of async function prior to ES2022?"
}