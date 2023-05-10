// How do style the console output using CSS?

/**
 * You can add CSS styling to the console output using the CSS format content specifier %c. The console string message can be appended after the specifier and CSS style in another argument. Let's print the red the color text using console.log and CSS specifier as below,
 * 
 */

console.log("%cThis is a red text", "color:red");

/**
 * It is also possible to add more styles for the content. For example, the font-size can be modified for the above text
 */

console.log(
    "%cThis is a red text with bigger font",
    "color:red; font-size:20px"
  );