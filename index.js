var col1 = document.getElementById("color1");
var col2 = document.getElementById("color2");
var css = document.getElementById("css");
var body = document.getElementById("grad");
var randBtn = document.getElementById("rand");

function setGrad() {
	body.style.background = "linear-gradient(to right, " + col1.value + ", " + col2.value + ")";
	css.textContent = body.style.background + ";";
}


function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setrand() {
	col1.value = getRandomColor();
	col2.value = getRandomColor();
	setGrad();
}

col1.addEventListener("input", setGrad);

col2.addEventListener("input", setGrad);

randBtn.addEventListener("click", setrand);

setGrad();