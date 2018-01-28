var css = document.querySelector("h3");
var color1 =document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randBtn = document.getElementById("randBtn");


function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	+color1.value
	+", "
	+color2.value
	+")";

	css.textContent = body.style.background +";";
}

function getRandomColor(){
	// var letters="0123456789ABCDEF";
	// var color = "#";
	// for (var i=0; i<6; i++){
	// 	color += letters[Math.floor(Math.random)*16];
	// }
	var color = ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
	return color;
}

function setRandomColors(){
	var randColor1 = getRandomColor();
	//color1 = randColor1;
	var randColor2 = getRandomColor();
	//color2 = randColor2;
}

window.onload = setGradient;

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randBtn.addEventListener("click", setRandomColors);
