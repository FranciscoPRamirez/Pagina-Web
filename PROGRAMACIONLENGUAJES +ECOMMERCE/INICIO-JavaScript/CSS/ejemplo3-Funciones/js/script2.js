//1º declaracion de variables

var n1 =parseInt(prompt('Introduce primer numero 💡'));
var n2=parseInt(prompt('Introduce el segundo numero 🎱'));

function sumar() {
 /*    let resultado = n1+n2; */
    swal('Resultado de la suma es: ' + (n1+n2));

}
function multiplicar() {
    let resultado = n1*n2;
    swal('Resultado de la multiplicacion es: ' + resultado);
    
}
function restar(n1,n2) {
    swal('Resultado de la resta es: ' + (n1-n2));

    
}
function dividir() {
    swal('Resultado de la resta es: / ' + (n1/n2));
}