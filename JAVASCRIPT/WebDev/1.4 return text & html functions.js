<body>
	<div class="container">
		<div class="box">Hey i am Box1</div>
		<div class="box">Hey i am Box2</div>
		<div class="box">Hey i am Box3</div>
		<div class="box">Hey i am Box4</div>
		<div class="box">Hey i am Box5</div>
	</div>
</body>

console.log("hi boxes")
document.querySelector(".box")         // returns the first element with class .box, = <div class="box">Hey i am Box1</div>

document.querySelector(".container").innerText   // returns only the texts 
// output :  'Hey i am Box1\nHey i am Box2\nHey i am Box3\nHey i am Box4\nHey i am Box5'

document.querySelector(".container").innerHTML   // returns the text along with all html inside the .container element
// output : '\n\t\t<div class="box">Hey i am Box1</div>\n\t\t<div class="box">Hey i am Box2</div>\n\t\t<div class="box">Hey i am Box3</div>\n\t\t<div class="box">Hey i am Box4</div>\n\t\t<div class="box">Hey i am Box5</div>\n\t'

document.querySelector(".container").outerHTML  // returns whatever is inside, along with outside of the element
// output : '<div class="container">\n\t\t<div class="box">Hey i am Box1</div>\n\t\t<div class="box">Hey i am Box2</div>\n\t\t<div class="box">Hey i am Box3</div>\n\t\t<div class="box">Hey i am Box4</div>\n\t\t<div class="box">Hey i am Box5</div>\n\t</div>'

document.querySelector(".container").tagName // returns the tag name of the element

document.querySelector(".container").nodeValue
// value of the node: null

document.querySelector(".container").nodeName
// output: 'DIV'  (returns the name of the node)

document.querySelector(".box").textContent  // returns the text in it, (same as inner text) 
//output: 'Hey i am Box1'

document.designMode ='on'    //  this will help you edit any website Hehe
