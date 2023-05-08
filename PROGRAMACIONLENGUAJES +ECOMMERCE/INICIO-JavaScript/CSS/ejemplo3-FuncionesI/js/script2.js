//1º declaracion de variables

var  n1  = parseInt ( prompt ( 'Introduce primer número 💡' ) ) ;
var  n2 = parseInt ( prompt ( 'Introduce el segundo número 🎱' ) ) ;

función  sumar ( )  {
 /* let resultado = n1+n2; */
    swal ( 'Resultado de la suma es: '  +  ( n1 + n2 ) ) ;

}
función  multiplicar ( )  {
    sea  ​​resultado  =  n1 * n2 ;
    swal ( 'Resultado de la multiplicacion es: '  +  resultado ) ;
    
}
función  reiniciar ( n1 , n2 )  {
    swal ( 'Resultado de la resta es: '  +  ( n1 - n2 ) ) ;

    
}
funcion  dividir ( )  {
    swal ( 'Resultado de la resta es: / '  +  ( n1 / n2 ) ) ;
}