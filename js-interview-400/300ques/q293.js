// How do get the timezone offset from date

/**
 * You can use the getTimezoneOffset method of the date object. This method returns the time zone difference, in minutes, from current locale (host system settings) to UTC


 */

var offset = new Date().getTimezoneOffset();
console.log(offset); // -480
