<!doctype html>
<html>
	<head>
		<title>Accessing HTML Element in JS</title>
	</head>
	<body>
		<h1 id="heading">This is a heading</h1>
		<p>Then comes a paragraph or a bunch of paragraphs.</p>
		<p>So let's add another paragraph.</p>
		<div class="parentDiv">
			<div class="childDiv">Hello JS!</div>
			<div class="childDiv">Hello JS again!</div>
		</div>
		<hr/>
		<script>
			document.write(document.getElementById("heading"));
			document.write("<br/>");  // for line break
			document.write(document.getElementsByClassName("childDiv").length);
		</script>
	</body>
</html>
