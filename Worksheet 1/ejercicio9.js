var img = document.createElement("img");
var moving = false;

function showImage () {
  img.src = 'images/imagen.jpg';
  img.style.position = "absolute";
	var div = document.getElementById("div").appendChild(img);
  img.onclick = clickImage;
  img.onmousemove = moveImage;
}

function clickImage (event) {
  offsetX = event.offsetX;
  offsetY = event.offsetY;
  moving = !moving;
}

function moveImage (event) {
  if (moving) {
    img.style.left = (event.clientX - offsetX) + 'px';
    img.style.top =(event.clientY - offsetY) + 'px';  
  }
}



window.onload = showImage;