function cambiarTam(event) {
    var t = document.getElementsByClassName("texto");
    for(var i = 0; i < t.length; i++){
        switch(event.target.id){
            case "sizeUp":
                if (i == 0) 
                    tam++;
                var parrafo = t.item(i);
                parrafo.style.fontSize = tam + "px";
                break;
            case "sizeDown":
                if (i == 0) 
                    tam--;
                var parrafo = t.item(i);
                parrafo.style.fontSize = tam + "px";
                break;
            case "resetSize":
                if (i == 0) 
                    tam = 16;
                var parrafo = t.item(i);
                parrafo.style.fontSize = tamDefecto + "px";
                tam = tamDefecto;
                break;
        }
    }
};

function alinear(event) {
    var t = document.getElementsByClassName("texto");
    for(var i = 0; i < t.length; i++){
        switch(event.target.id){
            case "left":
                var parrafo = t.item(i);
                parrafo.style.textAlign = "left";
                break;
            case "center":
                var parrafo = t.item(i);
                parrafo.style.textAlign = "center";
                break;
            case "right":
                var parrafo = t.item(i);
                parrafo.style.textAlign = "right";
                break;
            case "justify":
                var parrafo = t.item(i);
                parrafo.style.textAlign = "justify";
                break;
        }
    }
};

window.onload = function () {
  tamDefecto = 16;
  tam = 16;

  document.getElementById("sizeUp").addEventListener("click",cambiarTam);
  document.getElementById("sizeDown").addEventListener("click",cambiarTam);
  document.getElementById("resetSize").addEventListener("click",cambiarTam);


  document.getElementById("left").addEventListener("click",alinear);
  document.getElementById("right").addEventListener("click",alinear);
  document.getElementById("center").addEventListener("click",alinear);
  document.getElementById("justify").addEventListener("click",alinear);
};