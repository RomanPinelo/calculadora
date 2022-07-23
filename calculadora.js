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

// Variables para hacer las operaciones
var operacion;
var valorDisplay1;
var valorDisplay2;

// Eventos de los botones
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

btn_suma.addEventListener('click', function(){
  valorDisplay1 = display.innerText;
  operacion = "suma";
  display.innerHTML = "";
});

btn_resta.addEventListener('click', function(){
  valorDisplay1 = display.innerText;
  operacion = "resta";
  display.innerHTML = "";
});

btn_multi.addEventListener('click', function(){
  valorDisplay1 = display.innerText;
  operacion = "multiplicacion";
  display.innerHTML = "";
});

btn_division.addEventListener('click', function(){
  valorDisplay1 = display.innerText;
  operacion = "division";
  display.innerHTML = "";
});

btn_potencia.addEventListener('click', function(){
  valorDisplay1 = display.innerText;
  operacion = "potencia";
  display.innerHTML = "";
});

btn_raiz.addEventListener('click', function(){
  valorDisplay1 = display.innerText;
  operacion = "raiz";
  display.innerHTML = "";
});

btn_porciento.addEventListener("click", function(){
  valorDisplay2 = display.innerText;
  // Convierto a entero o flotante si tiene o no punto
  valorDisplay1.includes('.') ? valorDisplay1 = parseFloat(valorDisplay1) : valorDisplay1 = parseInt(valorDisplay1);
  valorDisplay2.includes('.') ? valorDisplay2 = parseFloat(valorDisplay2) : valorDisplay2 = parseInt(valorDisplay2);

  display.innerHTML = valorDisplay1 * (valorDisplay2 / 100);
});

btn_igual.addEventListener("click", function(){
  valorDisplay2 = display.innerText;
  // Convierto a entero o flotante si tiene o no punto
  valorDisplay1.includes('.') ? valorDisplay1 = parseFloat(valorDisplay1) : valorDisplay1 = parseInt(valorDisplay1);
  valorDisplay2.includes('.') ? valorDisplay2 = parseFloat(valorDisplay2) : valorDisplay2 = parseInt(valorDisplay2);

  if (operacion == 'suma') {
    if (isNaN(valorDisplay1 + valorDisplay2)) {
      display.innerHTML = 'Error';
    } else {
      display.innerHTML = valorDisplay1 + valorDisplay2;
    }
  }
  if (operacion == 'resta') {
    if (isNaN(valorDisplay1 - valorDisplay2)) {
      display.innerHTML = 'Error';
    } else {
      display.innerHTML = valorDisplay1 - valorDisplay2;
    }
  }
  if (operacion == 'multiplicacion') {
    if (isNaN(valorDisplay1 * valorDisplay2)) {
      display.innerHTML = 'Error';
    } else {
      display.innerHTML = valorDisplay1 * valorDisplay2;
    }
  }
  if (operacion == 'division') {
    if (isNaN(valorDisplay1 / valorDisplay2)) {
      display.innerHTML = 'Error';
    } else {
      display.innerHTML = valorDisplay1 / valorDisplay2;
    }
  }
  if (operacion == 'potencia') {
    if (isNaN(Math.pow(valorDisplay1, valorDisplay2))) {
      display.innerHTML = 'Error';
    } else {
      display.innerHTML = Math.pow(valorDisplay1, valorDisplay2);
    }
  }
  if (operacion == 'raiz') {
    if (isNaN(Math.pow(valorDisplay1, 1/valorDisplay2))) {
      display.innerHTML = 'Error';
    } else {
      display.innerHTML = Math.pow(valorDisplay1, 1/valorDisplay2);
    }
  }
});

// Hace cambiar el color de fondo y recorre todos los valores rgb posibles
var r = 0;
var g = 0;
var b = 0;

function colorFondo() {
  setInterval(() => {
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    b++;
    if (b > 255) {
      b = 0;
      g++;
      if (g > 255) {
        g = 0;
        r++;
        if (r > 255) {
          r = 0;
        }
      }
    }
  }, 1);
}

// colorFondo();