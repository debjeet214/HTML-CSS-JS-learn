<h1>What is API fetching ? </h1>
The Fetch API accesses resources across the network. You can make HTTP requests (using GET, POST and other methods), download, and upload files.  

<h4><b>SYNTAX</b></h4>const response = await fetch(resource[, options]);n    (where the resource is the URL & the optional is the method if want to)

**********************************************************************************************************

fetch() starts a request and returns a promise. When the request completes, the promise is resolved with the Response object. If the request fails due to some network problems, the promise is rejected. async/await syntax fits great with fetch() because it simplifies the work with promises with syntactic sugar. 

**********************************************************************************************************
<h2><b>Fetching JSON :</b></h2>

<i>The Response object offers a lot of useful methods (all returning promises): </i>

response.json() returns a promise resolved to a JSON object
response.text() returns a promise resolved to raw text
response.formData() returns a promise resolved to FormData
response.blob() returns a promise resolved to a Blob (a file-like object of raw data)
response.arrayBuffer()() returns a promise resolved to an ArryBuffer (raw generic binary data)
***********************************************************************************************************
<h2><b>Handling fetch errors :</b></h2>
When I was familiarizing with fetch(), I was surprised that fetch() doesn't throw an error when the server returns a bad HTTP status, e.g. client errors (400–499) or server errors (500–599). For example, let's access a non-existing page '/oops' on the server. As expected, such request ends in a 404 response status:

async function fetchMovies404() {
  const response = await fetch('/oops');
  
  response.ok;     // => false
  response.status; // => 404

  const text = await response.text();
  return text;
}

fetchMovies404().then(text => {
  text; // => 'Page not found'
});

When fetching the URL '/oops' the server responds with status 404 and text 'Page not found'. Surprisingly, fetch() doesn't throw an error for a missing URL, but considers this as a completed HTTP request.

fetch() rejects only if a request cannot be made or a response cannot be retrieved. This can happen during network problems: no internet connection, host not found, the server is not responding.

<b>Fortunately, response.ok property lets you distinguish good from bad HTTP response statuses. The property is set to true only if the response has status 200-299.</b>
