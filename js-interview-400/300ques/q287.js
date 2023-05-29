// How to get the value from get parameters

/**
 * The new URL() object accepts the url string and searchParams property of this object can be used to access the get parameters. Remember that you may need to use polyfill or window.location to access the URL in older browsers(including IE).
 */

let urlString = "http://www.some-domain.com/about.html?x=1&y=2&z=3"; //window.location.href
let url = new URL(urlString);
let parameterZ = url.searchParams.get("z");
console.log(parameterZ); // 3
