// How do you perform language specific date and time formatting

/**
 * You can use the Intl.DateTimeFormat object which is a constructor for objects that enable language-sensitive date and time formatting. Let's see this behavior with an example,
 */

var date = new Date(Date.UTC(2019, 07, 07, 3, 0, 0));
console.log(new Intl.DateTimeFormat("en-GB").format(date)); // 07/08/2019
console.log(new Intl.DateTimeFormat("en-AU").format(date)); // 07/08/2019
