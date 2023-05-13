// How do you encode an URL

/**
 * The encodeURI() function is used to encode complete URI which has special characters except (, / ? : @ & = + $ #) characters.
 */

var uri = "https://mozilla.org/?x=шеллы";
var encoded = encodeURI(uri);
console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
