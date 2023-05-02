const saluda = () =>{
    alert("¡Haz hecho click!");

}
const saludar = () =>{
    document.getElementById("miDiv").innerHTML = "¡Hola Mundo!";

}
const CambiarEstilo = () =>{
    var div = document.getElementById("Div");
    div.style.backgroundColor = "red";
}
    function camEstilo() {
        var div = document.getElementById("miDiv");
        if (div.classList.contains("oculto")) {
          div.classList.remove("oculto");
          document.querySelector("button").textContent = "cambiar estilo";
        } else {
          div.classList.add("oculto");
          document.querySelector("button").textContent = "cambiar otra vez el estilo";
}

}
