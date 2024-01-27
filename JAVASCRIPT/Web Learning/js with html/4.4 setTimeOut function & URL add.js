function makeHTTPCall(url)
{
    console.log("Making HTTP call: ", url);
    setTimeout(processResponse, 3000); 
}

function processResponse()
{
    console.log("response received...");
    console.log("Processing response...");
}
makeHTTPCall('https://studytonight.com/');
