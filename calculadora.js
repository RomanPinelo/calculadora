// Elementos del DOM
var display = document.getElementById("display");

var btn_cero = document.getElementById("cero");
var btn_uno = document.getElementById("uno");
var btn_dos = document.getElementById("dos");
var btn_tres = document.getElementById("tres");
var btn_cuatro = document.getElementById("cuatro");
var btn_cinco = document.getElementById("cinco");
var btn_seis = document.getElementById("seis");
var btn_siete = document.getElementById("siete");
var btn_ocho = document.getElementById("ocho");
var btn_nueve = document.getElementById("nueve");
var btn_suma = document.getElementById("suma");
var btn_resta = document.getElementById("resta");
var btn_multi = document.getElementById("multi");
var btn_division = document.getElementById("division");
var btn_potencia = document.getElementById("potencia");
var btn_raiz = document.getElementById("raiz");
var btn_punto = document.getElementById("punto");
var btn_porciento = document.getElementById("porciento");
var btn_igual = document.getElementById("igual");
var btn_borrar = document.getElementById("borrar");

// eventos de los botones
btn_cero.addEventListener('click', function(){
  let valorDisplay = display.innerText;
  valorDisplay += "0";
  display.innerHTML = valorDisplay;
});

btn_uno.addEventListener('click', function(){
  let valorDisplay = display.innerText;
  valorDisplay += "1";
  display.innerHTML = valorDisplay;
});

btn_dos.addEventListener('click', function(){
  let valorDisplay = display.innerText;
  valorDisplay += "2";
  display.innerHTML = valorDisplay;
});

btn_tres.addEventListener('click', function(){
  let valorDisplay = display.innerText;
  valorDisplay += "3";
  display.innerHTML = valorDisplay;
});

btn_cuatro.addEventListener('click', function(){
  let valorDisplay = display.innerText;
  valorDisplay += "4";
  display.innerHTML = valorDisplay;
});

btn_cinco.addEventListener('click', function(){
  let valorDisplay = display.innerText;
  valorDisplay += "5";
  display.innerHTML = valorDisplay;
});

btn_seis.addEventListener('click', function(){
  let valorDisplay = display.innerText;
  valorDisplay += "6";
  display.innerHTML = valorDisplay;
});

btn_siete.addEventListener('click', function(){
  let valorDisplay = display.innerText;
  valorDisplay += "7";
  display.innerHTML = valorDisplay;
});

btn_ocho.addEventListener('click', function(){
  let valorDisplay = display.innerText;
  valorDisplay += "8";
  display.innerHTML = valorDisplay;
});

btn_nueve.addEventListener('click', function(){
  let valorDisplay = display.innerText;
  valorDisplay += "9";
  display.innerHTML = valorDisplay;
});

btn_borrar.addEventListener('click', function(){
  display.innerHTML = "";
});

btn_punto.addEventListener('click', function(){
  let valorDisplay = display.innerText;
  valorDisplay += ".";
  display.innerHTML = valorDisplay;
});

// .addEventListener('click', function(){
  
// });