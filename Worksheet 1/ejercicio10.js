var div = document.getElementById("div");
var moving = false;
var imageActiva;

function getImages () {
  var imgs = document.getElementsByTagName("img");
  for (var i = 0; i < imgs.length; i++) {
    imgs[i] = showImage(i);
  }
}

function createImages (n) {
  for (var i = 1; i <= n; i++) {
    var img = document.createElement("img");
    img.src = 'images/imagen' + i + '.jpg';
    img.style.position = "absolute";
    div.appendChild(img);
    img.onclick = clickImage;
    document.onmousemove = moveImage;
  }
  
}

function clickImage (event) {
  offsetX = event.offsetX;
  offsetY = event.offsetY;
  moving = !moving;
  imageActiva = this;
}

function moveImage (event) {
  if (moving) {
    imageActiva.style.left = (event.clientX - offsetX) + 'px';
    imageActiva.style.top = (event.clientY - offsetY) + 'px';  
  }
}

window.onload = function() {
  createImages(2);
}