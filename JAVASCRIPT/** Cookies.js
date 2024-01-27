/*
    JavaScript Cookie is used to store some useful information on the client's browser which can be accessed in consecutive HTTP requests.
    A cookie is a small file containing information, stored at the client's computer or to be more specific in the client's browser. Each time 
    when the client requests a web page, the server can access the cookie to know who is trying to access it.

    The size of the cookie depends on the browser but generally, it should not exceed 1K (1,024 bytes). So we should be careful with what we store in our cookies.

    A cookie has several attributes, which contain vital information about the cookie such as its name, the domain name to which it belongs, the address of a valid
    path within a domain, and an expiration time.
*/

// CREATE A COOKIE
document.cookie = "username=John Wick; expires=Thu, 18 July 2021 12:00:00 UTC; path=/";

// READ A COOKIE
let data = document.cookie;

//UPDATE A COOKIE
document.cookie = "username=John Wicksman; expires=Thu, 18 July 2022 12:00:00 UTC; path=/";

//DELETE A COOKIE
// we have to set the date of the cookie of any data before 1990, it will be recognized as expired and will be deleted.


// NOTE  If we create a cookie from our website, which is studytonight.com then only studytonight.com can access the cookie. 
// This is made sure by the browser so that websites cannot look into data stored by other websites in user's browser.


//cookie that will set a custom cookie here
<html>
    <head>
    <script>
    // fetch cookie to check
    let cookie = document.cookie;
    if(cookie.search("Hello=World")>=0)
    {
	    console.log("Cookie found");
    }
    else {
        document.cookie = "Hello=World";
    }
    // fetch cookie to print value
    cookie = document.cookie;
    document.write(cookie);
    </script>
</head>
<body>

</body>
