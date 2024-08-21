const body = document.querySelector("body");
const start = document.querySelector("#start");
const stopp = document.querySelector("#stop");

start.addEventListener("click", startChange);
stopp.addEventListener("click", stopChange);

let intervalID;
function changeBg() {
	body.style.backgroundColor = `${randomColor()}`;
}

function startChange() {
	intervalID = setInterval(changeBg, 1000);
}

function stopChange() {
	clearInterval(intervalID);
	intervalID = null;
}

function randomColor() {
	const str = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += str[Math.floor(Math.random() * 16)];
	}

	return color;
}
