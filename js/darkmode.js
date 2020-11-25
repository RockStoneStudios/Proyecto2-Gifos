// MODO NOCTURNO
document.getElementById("mode-dark").addEventListener("click", function () { // Doy click en el Boton
  document.getElementById("cuerpo").classList.toggle("cuerpo-dark");
  //  si no esta cuerpo-dark lo agrega , si esta lo borra
  if (document.getElementById("cuerpo").classList.contains("cuerpo-dark")) {
     // en este if pregunto si el cuerpo contiene la clase dark si si la tiene en el local-storage guardo
     // osea estoy en modo nocturno
    localStorage.setItem("dark-mode", "true");
  } else {
    // si no la tiene osea q sigo en modo diurno y en el localstorage dark-modo falso osea estoy en modo diurno
    localStorage.setItem("dark-mode", "false");
  }
  // aca llamo la funcion de abajo seteoDark();
  seteoDark();
})

function seteoDark() {
  if (localStorage.getItem("dark-mode") === "true") {// aca pregunto en que modo estoy en este caso si es nocturno 
    document.getElementById("logo").setAttribute("src", "/assets/logo-mobile-modo-noct.svg"); // cambio icono
    document.getElementById("srch-btn").style.color = "#FFFFFF"; //cambio boton-buscar a blanco
    document.getElementById("mode-dark").textContent = "Modo Diurno"; // cambio el texto de boton a modo diurno
    document.getElementById("cuerpo").classList.add("cuerpo-dark"); // cambio todo el body a nocturno
    document.getElementById("cuerpo").classList.remove("cuerpo"); //remuevo la clase del modo diurno
    document.getElementById("camara").setAttribute("src", "/assets/camara-modo-noc.svg"); // cambio imagen camara
    document.getElementById("pelicula").setAttribute("src", "/assets/pelicula-modo-noc.svg");//cambio imagen
  } else {
     // por defecto si no estoy en modo nocturno 
    document.getElementById("logo").setAttribute("src", "/assets/logo-mobile.svg"); //dejo todo en modo original
    document.getElementById("srch-btn").style.color = "#572EE5";
    document.getElementById("mode-dark").textContent = "Modo Nocturno";
    document.getElementById("cuerpo").classList.remove("cuerpo-dark");
    document.getElementById("cuerpo").classList.add("cuerpo");
    document.getElementById("camara").setAttribute("src", "/assets/camara.svg");
    document.getElementById("pelicula").setAttribute("src", "/assets/pelicula.svg");
  }
}