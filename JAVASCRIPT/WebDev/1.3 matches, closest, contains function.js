e[4].matches ="#redbox"  // return 'true' if the id of index 4 element is redbox otherwise 'false'

e[3].closest(".container"); // return 'null' if not found

// searches the id or class or tag in the element, then in it's parent nodes and if found it will return the search flow 

document.querySelector(".container").contains(document.querySelector(body))   // returns false cause there is no body inside container

document.querySelector(body).contains(document.querySelector(".container"))  // returns true cause container class is inside the body tag 
