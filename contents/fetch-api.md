## Fetch API

### Three elements in every rest api

- Request - This is the data you send to the API, like an order id to fetch the order details
- Response - Any data you get back from the server after a successful / failed request.
- Headers - Additional metadata passed to the API to help the server understand what type of request it is dealing with, for example “content-type”.


There are a few different types of REST APIs. Let’s look at the ones you will use in most cases.

- GET — Get data from the API. For example, get a twitter user based on their username.
- POST — Push data to the API. For example, create a new user record with name, age, and email address.
- PUT — Update an existing record with new data. For example, update a user’s email address.
- DELETE — Remove a record. For example, delete a user from the database.

### How to make simple get api call?

// GET Request.
fetch('https://api.github.com/users/manishmshiva')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors


### How to read the response?

Response provides multiple promise-based methods to access the body in various formats:

- response.text() – read the response and return as text,
- response.json() – parse the response as JSON,
- response.formData() – return the response as FormData object (explained in the next chapter),
- response.blob() – return the response as Blob (binary data with type),
- response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data),
- additionally, response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk, we’ll see an example later.

[Ref] (https://javascript.info/fetch)

- fetch() method is available in the window object - window.fetch(), so for front-end js we no need to import any lib/module

## use node-fetch in the nodejs module

fetch(url).then((resp) => {
    // response object
    // contains useful properties and methods
    // console.log(resp)
    // convert response into json data
    // returns promise
    // always handle the catch
    returns resp.json()
}).then ((data) => {
    console.log(data)
}).catch((err) => console.log(err))


## Issues and solutions

**Error:** 
https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined


## async, await, fetch, try, catch
- you can call the fetch from async function, using awit for response
- handle the errors using try catch



