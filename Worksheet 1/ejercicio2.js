function getPosition(event) {
	var div = document.getElementById("div");
    div.innerHTML= "X: " + event.clientX + ", Y: " + event.clientY;
}
document.onmousemove = function (event){getPosition(event)};