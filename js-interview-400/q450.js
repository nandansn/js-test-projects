// How to use await outside of async function prior to ES2022?

/**
 * Prior to ES2022, if you attempted to use an await outside of an async function resulted in a SyntaxError.
 */

await Promise.resolve(console.log('Hello await')); // SyntaxError: await is only valid in async function

// But you can fix this issue with an alternative IIFE (Immediately Invoked Function Expression) to get access to the feature.

(async function() {
    await Promise.resolve(console.log('Hello await')); // Hello await
  }());

//   In ES2022, you can write top-level await without writing any hacks.

await Promise.resolve(console.log('Hello await')); //Hello await

