// HTML CODE
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<div id="app"></div>
	<button class="btn">Button</button>
	<script src="one.js"></script>
</body>
</html>

const button = document.querySelector(".btn")

//EVENT LISTENER
// in case of event listener we can add multiple same event listener and get results for both on same event without error.
button.addEventListener("click", () => {
  console.log("First button is clicked");
});

button.addEventListener("click", () => {
  console.log("Second button is clicked");
}  

// EVENT HANDLER
// in case opf event handler it will return error when we add two same event handler for single element
button.onclick = () => {
  console.log("First button, event listener ")
}

button.onclick = () => {
  console.log("Second button, event listener ")
}
