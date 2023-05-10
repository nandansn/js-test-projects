/*

How do you get the image width and height using JS

You can programmatically get the image and check the dimensions(width and height) using Javascript.

var img = new Image();
img.onload = function () {
  console.log(this.width + "x" + this.height);
};
img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";

*/
