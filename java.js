/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/
let cadena = "Hola Mundo";

function caracteres(variable){
    console.log(variable.length);
};
caracteres(cadena);

function recortado(variable){
    console.log(variable.substring(0,4));
};
recortado(cadena);

let stringCadena = 'hola que tal';
let espacio = " ";

function separacion(variable, separador){
   let arrayCadena = variable.split(separador);
   console.log(arrayCadena)    
};
separacion(stringCadena, espacio);

function repeticion(variable, numero){
    let repetido = variable.repeat(numero);
    console.log(repetido);
};
repeticion(cadena, 3);

/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

function invertido(variable){
    let stringDividido = variable.split("");
    let invertirCadena = stringDividido.reverse();
    let unirString = invertirCadena.join("");
    return console.log(unirString);
};
invertido(cadena);

let texto = "hola mundo adios mundo",
mundo = "mundo";

function contador(variable,palabra){
    let indice = 0,
    contador = 0;
    while (indice !== -1){
    indice = variable.indexOf(palabra, indice);
    if (indice !== -1){
        indice++;
        contador++;
    }
}    
    return console.log(contador)
};
contador(texto, mundo);

let palindr = "salas";

function palindromo(palabra, reversa){

    let stringDividido = reversa.split("");
    let invertirCadena = stringDividido.reverse();
    let unirString = invertirCadena.join("");
    if (unirString === palabra) {
        return console.log(true);
    } else{
        return console.log(false);
    }
};
palindromo(palindr,palindr);

let numeros = ["xyz1","xyz2","xyz3","xyz4","xyz5"];
let clave = "xyz";

function eliminarPalabras(array, palabra){
    array = array.map(function(xyz){
        return xyz.replace(palabra,"")
    });
    console.log(array);
};
eliminarPalabras(numeros, clave);

/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

function numeroRan(minimo,maximo){
    console.log(Math.random() * (maximo - minimo) + minimo);
};
numeroRan(501, 600);

function cap(num){
    num = num.toString()
    let numeroReverse = num.split("").reverse().join("");
    if (num === numeroReverse) {
        console.log(true)
    } else{
        console.log(false)
    }
};
cap(2002);

function fact(num){
    let totalFact = 1
    for (let indice = 1; indice <= num; indice++) {
        totalFact = totalFact * indice
    }
    console.log(totalFact);
};
fact(5);

/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/
function primo(num){
    let esDivisible = false
    for (let i = 2; i < num; i++) {
        if ((num % i) === 0) {
        esDivisible = true
           break;
        };
    };
    console.log(esDivisible);
};
primo(7);

function par(num){
    if ((num % 2) === 0){
        console.log(true)
    } else{
        console.log(false)
    }
};
par(29);

function grados(num,grado){
    if (grado === "C") {
        console.log((num * 9/5) + 32 + `°F`)
    } else if (grado === "F"){
        console.log((num - 32) * 5/9 + `°C`);
    }
};
grados(0,"F");
/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

function descuento(cantidad,desc){
    let descuentoTotal = desc / 100;
    let total = cantidad - (cantidad * descuentoTotal);
    console.log(total);
}
descuento(1000, 20);



/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/


function letras(cadena){
    let vocales = "AEIOUaeiou",
    consonantes = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz",
    contadorVocales = 0,
    contadorConsonantes = 0;

    for (let index = 0; index < cadena.length; index++) {
        if (vocales.indexOf(cadena[index]) !== -1) {
            contadorVocales++
        }
    };
    for (let index = 0; index < cadena.length; index++) {
        if (consonantes.indexOf(cadena[index]) !== -1) {
            contadorConsonantes++
        }
    }
    console.log("vocales: " + contadorVocales + " " + "consonantes: " + contadorConsonantes)
};