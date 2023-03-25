/*

How do you make synchronous HTTP request

Browsers provide an XMLHttpRequest object which can be used to make synchronous HTTP requests from JavaScript

function httpGet(theUrl) {
  var xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", theUrl, false); // false for synchronous request
  xmlHttpReq.send(null);
  return xmlHttpReq.responseText;
}

*/
