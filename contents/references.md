### How to parse the html in the response
- use DomParser
>const parser = new DOMParser()
>
>const virtualDoc = parser.parseFromString(htmlString, 'text/html')

- [Reference](https://stackoverflow.com/questions/63869394/parse-html-as-a-plain-text-via-javascript)

### How to handle CORS error?
- Adding the CORS extension plugin to the browser. 
- Extension for chrome: Allow CORS: Access-Control-Allow-Origin
- [Reference] (https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9)

### How to use multiple promises on  iterator objects like array or list,
- use Promise.all(functionThatReturnsPromise)
- [Reference] (https://stackoverflow.com/questions/31413749/node-js-promise-all-and-foreach)

### CSS Cheat sheet

- [Reference] (https://websitesetup.org/css3-cheat-sheet/)
- [Reference] (https://htmlcheatsheet.com/css/)

### How to download file from website using fetch api

- [Reference] (https://code-boxx.com/download-file-javascript-fetch/)

### How to get the last element from the array?

- using array.slice(-1);
- [Reference] (https://flexiple.com/get-last-array-element-javascript/)

### how to rename files in a directory

- [Reference] (https://linguinecode.com/post/rename-files-using-nodejs)


### JavaScript Tutorials:

- [Reference] (https://www.javascripttutorial.net/javascript-fetch-api/)

### How to generate the random hexa code in JS

> Math.floor(Math.random()*16777215).toString(16);

- [Reference] (https://www.codegrepper.com/code-examples/javascript/js+get+a+random+six+digit+hex+color)