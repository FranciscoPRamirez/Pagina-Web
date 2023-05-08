//1º defino variable (eje)
/* var dato = prompt('introduce un numero!'); */
/*Anidacion de los metodos sustituye a la construccion anterios*/
var dato = parseFloat(prompt('Introduce un nº!!!!'));
// Revision y anailis de la variable
console.log(dato + typeof(dato));
//Comprobado que es un string, vamos a transformar el string a number
/*
 *Para ello tenemos dos metodos dierenciados que ambos transformas el tipo pero con
 caracteristicas diferentes 
*/

/*1º parseFloat()
convertira el argumento de cadena de string y nos devolverá un numero de punto flotante
ed: Si el primer caracter no identifca como numero, parseFloat es un Nan (no as number) y 
si identifica un numero continua hasta el punto y continua leyendo los siguientes caracteres

*/
/* var secundaria ↓  */
          var decimal = parseFloat(dato);
console.log(decimal + typeof(decimal))

/*
2º parseInt()
convertira el argumento de cadena de string y nos devolverá un numero de punto flotante
ed: Si el primer caracter no identifca como numero, parseFloat es un Nan (no as number) y 
si identifica un numero continua hasta el punto y NO continua leyendo los siguientes caracteres

*/
var entero = parseInt(dato);
console.log(entero+ typeof(entero));

