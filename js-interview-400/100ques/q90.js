// What is the difference between document load and DOMContentLoaded events

/*

The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting 
for assets(stylesheets, images, and subframes) to finish loading. Whereas The load event is fired when the whole page has loaded, 
including all dependent resources(stylesheets, images).

A different event, load, should be used only to detect a fully-loaded page. It is a common mistake to use load where DOMContentLoaded would be more appropriate.

*/
