// What is an error object

// An error object is a built in error object, that provides error information when an error occurs.

// It has two properties: name and message.

try {
  greeting("Welcome");
} catch (err) {
  console.log(err.name + "<br>" + err.message);
}
