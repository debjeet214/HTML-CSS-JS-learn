<!doctype html>
<html>
	<head>
		<title>Create a new HTML Element</title>
	</head>
	<body>
		<div id="magicDiv">Welcome to JS World!</div>
		<ul id = "jsFeatureList">
			<li>JavaScript is fun to use.</li>
			<li>JavaScript can be used for both frontend and backend.</li>
		</ul>
		<script>
			// create new list item
            let liElement = document.createElement("li");
            liElement.innerHTML = "JavaScript supports OOP";

			// find the list in DOM
			let list = document.getElementById("jsFeatureList");
			// add it to the list
            list.appendChild(liElement);
		</script>
	</body>
</html>

