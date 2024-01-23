<!doctype html>
	<head>
		<title>Javascript with HTML</title>
		<script>
			/* JS in the head section */
			function doSomething() {
				document.getElementById("heading").textContent = "New heading";
			}
		</script>
	</head>
	<body>
		<h1 id="heading">Some Page Heading</h1>
		<button onclick="doSomething()">Click me!</button>         
  // adding doSomething() method in the click button
	</body>
</html>
