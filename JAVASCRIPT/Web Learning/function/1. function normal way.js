function teaBreak(){      //function declaring
	console.log("Start making tea");    //function body
	console.log("Tea ready");
	console.log("Enjoy the tea");
        console.log("-------");
}

let teaHour;

for(teaHour=1; teaHour<=12; teaHour++)
{
	if(teaHour%4 == 0)
	{
		teaBreak();    //function call
	}
}
