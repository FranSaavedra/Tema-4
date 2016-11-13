function hayCookie () {
	return document.cookie;
}

function crearCookie (nombre,valor) {
	var fecha = new Date();
	fecha.setTime(fecha.getTime() + 5 * 60000);

	document.cookie = nombre + "=" + valor + "; expires=" + fecha + ";";
}

function obtenerCookie (nombre) {
	cookies = document.cookie.split("=");
	return cookies[1];

}

window.onload = function () {
	var div = document.getElementById("div");

	if (!hayCookie()){
		var nombre = prompt("Introduzca el nombre de usuario", "");
		crearCookie("username",nombre);
	}
	//En Chrome devuelve undefined. En Edge funciona correctamente. 
    div.innerHTML = obtenerCookie("username");
};