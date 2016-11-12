function normal() {
   cambiarEstilo("normal.css");
}

function minimalista() {
    cambiarEstilo("minimalista.css");
}


function cambiarEstilo(archivo) {

    var oldLink = document.getElementsByTagName("link").item(0);

    var newLink = document.createElement("link");
    newLink.setAttribute("rel", "stylesheet");
    newLink.setAttribute("type", "text/css");
    newLink.setAttribute("href", archivo);

    document.getElementsByTagName("head").item(0).replaceChild(newLink, oldLink);
}

window.onload = function () {
    document.getElementById("normal").addEventListener("click",function (e) {
        e.preventDefault();
        normal();
    });
    document.getElementById("minimalista").addEventListener("click",function (e) {
        e.preventDefault();
        minimalista();
    });
};