//Detecting clicked Button!




$(document).keypress(function(Event){
	var pressedKey = Event.key;
	console.log(pressedKey);
	$(".last").text(pressedKey);
});




setTimeout(function(){
	$("#title").removeClass("red");
}, 5000);

for (var i = 0; i < 7; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function(){
		var buttonClick = this.innerHTML;
		makeSound(buttonClick);
		buttonAnimation(buttonClick);
	});
}


//Detecting pressed Key!

for (var i = 0; i < 7; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("keypress", function(Event){
		var buttonPress = Event.key;
		makeSound(buttonPress);
		buttonAnimation(buttonPress);
	});
}


//Audio Playing function!!

function makeSound(button){

	switch (button) {
		case "w":
			var audio = new Audio('sounds/tom-1.mp3');
			audio.play();
			break;

		case "a":
			var audio = new Audio('sounds/tom-2.mp3');
			audio.play();
			break;

		case "s":
			var audio = new Audio('sounds/tom-3.mp3');
			audio.play();
			break;


		case "d":
			var audio = new Audio('sounds/tom-4.mp3');
			audio.play();
			break;

		case "j":
			var audio = new Audio('sounds/crash.mp3');
			audio.play();
			break;

		case "k":
			var audio = new Audio('sounds/kick-bass.mp3');
			audio.play();
			break;

		case "l":
			var audio = new Audio('sounds/snare.mp3');
			audio.play();
			break;


	}
}

function buttonAnimation(currentKey){
	document.querySelector("."+currentKey).classList.add("pressed");
	setTimeout(function(){document.querySelector("."+currentKey).classList.remove("pressed")}, 100);
}
