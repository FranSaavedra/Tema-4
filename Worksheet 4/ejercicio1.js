function crearCookie (id,valor, fechaExpiracion) {
	document.cookie = id + "=" + valor + "; expires=" + fechaExpiracion + ";";
}

function crearCookieDeSesion (id,valor) {
	document.cookie = id + "=" + valor + ";";
}

function leerCookie (id) {
	var cookie = id + "=";
	cookies = document.cookie.split(";");
	for(var i = 0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(cookie) == 0) {
            return c.substring(cookie.length,c.length);
        }
    }
    return null;

}

function borrarCookie () {
	document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	div.innerHTML = "Has cerrado sesion. <br/>";
}

window.onload = function () {
	div = document.getElementById("div");

	if (leerCookie("username") == null){
		var nombre = prompt("Introduzca el nombre de usuario", "");
		var fecha = new Date();
		fecha.setTime(fecha.getTime() + 5 * 60000);
		crearCookie("username",nombre, fecha);
	}
	//En Chrome sólo funciona si lo paso por el servidor.
    div.innerHTML = "Hola " + leerCookie("username") + "<br/>";

    var cerrarSesion = document.createElement('input');
    cerrarSesion.type = "button";
    cerrarSesion.onclick = borrarCookie;
    cerrarSesion.value = "Cerrar sesion";
    div.appendChild(cerrarSesion);

    var fondo = document.createElement('input');
    fondo.type = "button";
    fondo.onclick = function() {
	    var color = prompt("Introduzca el color de fondo de la pagina","");
	    document.body.style.backgroundColor = color;
	};
    fondo.value = "Color de fondo";
    div.appendChild(fondo);

    var colorDiv = document.createElement('input');
    colorDiv.type = "button";
    colorDiv.onclick = function() {
    	var color = prompt("Introduzca el color de fondo del div","");
	    div.style.backgroundColor = color;
	};
    colorDiv.value = "Color de div";
    div.appendChild(colorDiv);

    var letra = document.createElement('input');
    letra.type = "button";
    letra.onclick = function() {
    	var tam = parseInt(prompt("Introduzca el tamano de letra",""));
	    div.style.fontSize = tam + "px";
	};
    letra.value = "Tam de letra";
    div.appendChild(letra);
};