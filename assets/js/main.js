// cycle through array and use next item

$(document).ready(function(){

var quotes = [{"name": "Dr. Suess", "quote": "Don't cry because it's over, smile because it happened."},
			 	{"name": "Marilyn Monroe", "quote": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."},
			 	{"name": "Albert Einstein", "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."},
			 	{"name": "Albert Camus", "quote": "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me. Just be my friend"}];
	
var colors = ["rgb(102, 101, 71)",
				"rgb(251, 46, 1)",
				"rgb(111, 203, 159)",
				"rgb(255, 226, 138)",
				"rgb(34, 47, 91)"];

function cycleArray(array, html){
	for(var i=0; i<array.length; i++){
		if(array[i] == html){
			if(i+1 < array.length){
			return array[i+1];
		}else{
			return array[0];
		}
		}
	}
}

function cycleQuotes(array, html){
	for(var i=0; i<array.length; i++){
		if(array[i].quote == html){
			if(i+1 < array.length){
			return array[i+1];
		}else{
			return array[0];
		}
		}
	}
}

function changingColors(){
	var rCol = cycleArray(colors, $(".changing-color").css("color"));
	$(".bg-color").animate({backgroundColor: rCol}, 1000);
	$(".changing-color").animate({color: rCol}, 1000);
}

function changingQuotes(){
	var rQuote = cycleQuotes(quotes, $("#quote").html());
	$("#quote").html(rQuote.quote);
	$("#source").html("-" + rQuote.name);	
}

$("#new-quote").click(function(){	
		changingColors();
		changingQuotes();
	});
});