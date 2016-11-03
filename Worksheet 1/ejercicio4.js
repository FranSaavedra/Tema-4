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
	           	}
           };
           td.width='5';
           td.height='5';
           tr.appendChild(td);
       }
    }
    div.appendChild(table);
}

window.onload = drawCanvas;