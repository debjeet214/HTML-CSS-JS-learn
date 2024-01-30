let x = Math.random();
		
let boxes = document.querySelectorAll(".box");
        let colors = ["red", "yellow", "blue", "greenyellow", "pink", "coral", "brown", "aliceblue" , "aqua" , "violet" , "cyan"]
        let size = colors.length

        boxes.forEach(element => {
            let random = Math.floor(Math.random()*size)
            element.style.backgroundColor = colors[random];
        });

        
        boxes.forEach(element => {
            let random = Math.floor(Math.random()*5)
            element.style.color = colors[random];
        });
