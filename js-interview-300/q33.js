// How do you reuse information across service worker restarts

/*

The problem with service worker is that it gets terminated when not in use, and restarted when it's next needed, 
so you cannot rely on global state within a service worker's onfetch and onmessage handlers. 
In this case, service workers will have access to IndexedDB API in order to persist and reuse across restarts.

*/
