function drawCanvas (argument) {
	var div = document.getElementById("div");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<50; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<100; j++){
           var td = document.createElement('TD');
           td.onmousemove = function (event){
	           	if (event.ctrlKey) {
	           		this.style.backgroundColor = 'red';
	           	}else if (event.shiftKey) {
	           		this.style.backgroundColor = 'blue';
	           	}else if (event.altKey) {
                this.style.backgroundColor = 'white';
              }
           };
           td.width='5';
           td.height='5';
           tr.appendChild(td);
       }
    }
    div.appendChild(table);

    var boton = document.createElement('input');
    boton.type = "button";
    boton.value = "Borrar canvas";
    boton.addEventListener("click",resetCanvas);

    div.appendChild(boton)
}

function resetCanvas () {
  var div = document.getElementById("div"); 
  var a = div.childNodes[0].childNodes[0];
  for (var i = 0; i < div.childNodes[0].childNodes[0].childNodes.length; i++) {
     for (var j = 0; j < div.childNodes[0].childNodes[0].childNodes[i].childNodes.length; j++) {
        div.childNodes[0].childNodes[0].childNodes[i].childNodes[j].style.backgroundColor = 'white';
     }
   }
}

window.onload = drawCanvas;