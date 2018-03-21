//get city name
//compare city name with image files
//if it is the true change background images
$(document).ready(function(){
	console.log("js ready");
})

$("form").click(function (event) {
	event.preventDefault();
});

$("#submit-btn").click(upDate);

function upDate(){
var city = $("#city-type").val().toLowerCase().trim();

if (city == "new york" || city == "new york city" || city == "nyc"){
	$("body").attr("class","nyc");
}else if (city == "san francisco" || city == "sf" || city == "bay area"){
	$("body").attr("class","sf");
}else if (city == "los angeles" || city == "la" || city == "lax"){
	$("body").attr("class","la");		
}else if (city == "austin" || city == "atx"){
	$("body").attr("class","austin");
}else if (city == "sydney" || city == "syd"){
	$("body").attr("class","sydney");
}else{
	alert("Enter a city name please.")	
};
$("#city-type").val('');
};
