// What is callback in callback

/*

You can nest one callback inside in another callback to execute the actions sequentially one by one. This is known as callbacks in callbacks.

loadScript("/script1.js", function (script) {
  console.log("first script is loaded");

  loadScript("/script2.js", function (script) {
    console.log("second script is loaded");

    loadScript("/script3.js", function (script) {
      console.log("third script is loaded");
      // after all scripts are loaded
    });
  });
});

*/
