/*
Translate border-left-width to borderLeftWidth

Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.
*/

function camelize(text) {
  let finalText = text
    .split("-")
    .map((item, index) => {
      if (index > 0) {
        item = item.charAt(0).toUpperCase().concat(item.slice(1));
      }
      return item;
    })
    .join("");
  return finalText;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
