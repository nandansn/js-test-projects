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