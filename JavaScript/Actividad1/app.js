

// let numeroUno = parseInt(prompt("Ingrese un numero"));
// let numeroDos = parseInt(prompt("Ingrese el numero 2"));

// let resultado = numeroUno + numeroDos;
// let resultado2 = numeroUno - numeroDos;
// let resultado3 = numeroUno * numeroDos;
// let resultado4 = numeroUno / numeroDos;

// alert("la suma de " + numeroUno + " y " + numeroDos + " es igual a " + resultado);
// alert("la resta de " + numeroUno + " y " + numeroDos + " es igual a " + resultado2);
// alert("la multiplicacion de " + numeroUno + " y " + numeroDos + " es igual a " + resultado3);
// alert("la divicion de " + numeroUno + " y " + numeroDos + " es igual a " + resultado4);

// Entrada de datos
let datoPeso = parseInt(prompt("Ingrese peso(kg):")); // Usamos el let para declarar la variable y una vez devlarada usamos el "parseInt" para mostrar un cuadro en el cual el usuario ingresara los datos y el "prompt" que es donde va a mostrar el mensaje que dara la instrucciones
let datoAltura = parseInt(prompt("Ingrese tu altura(cm):"));

// Proceso
let resultadoIMC = datoPeso / (datoAltura*2);
if (resultadoIMC < 18.5) {
    alert("Bajo de peso");
}else if (resultadoIMC >- 18.5) {
    
}

// Resultado
alert("el IMC es igual a " + resultadoIMC);