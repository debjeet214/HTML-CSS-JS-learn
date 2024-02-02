The Fetch API accesses resources across the network. You can make HTTP requests (using GET, POST and other methods), download, and upload files.  const response = await fetch(resource[, options]);n    (where the resource is the URL & the optional is the method if want to)

**********************************************************************************************************

fetch() starts a request and returns a promise. When the request completes, the promise is resolved with the Response object. If the request fails due to some network problems, the promise is rejected. async/await syntax fits great with fetch() because it simplifies the work with promises with syntactic sugar. 

**********************************************************************************************************
<h2><b>Fetching JSON :</b></h2>

<u>The Response object offers a lot of useful methods (all returning promises): </u>

response.json() returns a promise resolved to a JSON object
response.text() returns a promise resolved to raw text
response.formData() returns a promise resolved to FormData
response.blob() returns a promise resolved to a Blob (a file-like object of raw data)
response.arrayBuffer()() returns a promise resolved to an ArryBuffer (raw generic binary data)
