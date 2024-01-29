<body>
	<div class="container">
		<div class="box">Box1</div>
		<div class="box">Box2</div>
		<div class="box">Box3</div>
		<div class="box">Box4</div>
		<div class="box">Box5</div>
	</div>

<table>
		<tr>
		  <th>Company</th>
		  <th>Contact</th>
		  <th>Country</th>
		</tr>
		<tr>
		  <td>Alfreds Futterkiste</td>
		  <td>Maria Anders</td>
		  <td>Germany</td>
		</tr>
		<tr>
		  <td>Centro comercial Moctezuma</td>
		  <td>Francisco Chang</td>
		  <td>Mexico</td>
		</tr>
	  </table>
  
	<script src="one.js">
	    console.log("Hello world")
	</script>
</body>

//*******************************************************************

document.body   // it'll give the complete html body
document.body.childNodes  // show all the child nodes
NodeList(9) [text, div.container, text, script, text, comment, text, script, text]

document.body.childElements     // show all the child nodes that are elements
document.body.childElementCount  //count the no. of child elements
document.body.firstElementChild.nextElementSibling // it will return the next element of the current element it is pointing

document.body.firstElementChild.previousElementSibling // it will return the previous element of the current element it is pointing

document.body.firstElementChild  // return first child element
document.body.lastElementChild  // return last child element
document.body.firstElementChild.childNodes // this will return only the elements inside the first child elements
document.body.firstElementChild.children  // this will return all the nodes inside the first child elements

document.body.firstElementChild.children[2]  // it will return the index 3 child element in the first child element output: <div class=​"box">​Box3​</div>​

// lets say there is a table at index 2 
document.body.firstElementChild.children[1] //to access the table
document.body.firstElementChild.children[1].rows // to access the rows
