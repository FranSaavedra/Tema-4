function normal() {
    eliminarEstilos(document.body);
}

function eliminarEstilos(elem) {
    elem.removeAttribute("style");

    for(var child in elem.childNodes) 
        if(elem.childNodes[child].nodeType == 1)
            eliminarEstilos(elem.childNodes[child]);
}


function minimalista() {
    var lateral = document.getElementById("lateral");
    lateral.style.float = "left";
    lateral.style.width = "10%";
    lateral.style.height = "100%";
    lateral.style.backgroundColor = "#2196F3";

    var central = document.getElementById("central");
    central.style.float = "right";
    central.style.width = "90%";
    central.style.height = "100%";
    central.style.backgroundColor = "#FFF9C4";

    var menu = document.getElementById("menu");
    menu.style.margin = "15px";
    menu.style.backgroundColor = "#F5F5F5";

    var header = document.getElementById("header");
    header.style.margin = "15px";

    var footer = document.getElementById("footer");
    footer.style.border = "1px solid #000000";
    footer.style.backgroundColor = "#FFEB3B";

    var arrayP = document.getElementsByTagName("p");
    for(var i = 0; i < arrayP.length; i++) 
        arrayP.item(i).style.margin = "15px";
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