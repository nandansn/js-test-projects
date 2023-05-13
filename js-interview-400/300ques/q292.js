// How do you invoke javascript code in an iframe from parent page

/**
 * Initially iFrame needs to be accessed using either document.getElementBy or window.frames. After that contentWindow property of iFrame gives the access for targetFunction


 */

document.getElementById("targetFrame").contentWindow.targetFunction();
window.frames[0].frameElement.contentWindow.targetFunction(); // Accessing iframe this way may not work in latest versions chrome and firefox
