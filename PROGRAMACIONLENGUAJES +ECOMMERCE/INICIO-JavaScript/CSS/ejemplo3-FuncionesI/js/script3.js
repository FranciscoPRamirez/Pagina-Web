/*
* =========================
                método: getElementById()
                =========================
    
        DEVOLVERÁ EL ELEMENTO QUE CONTIENE AQUEL ATRIBUTO DEFINIDO POR id="";
        CON SU VALOR ESPECÍFICO.
        CUYA ESENCIA ES: MANIPULAR U OBTENER INFORMACION CONCRETA DE UN ELEMENTO QUE
        APUNTA AL DOCTIPO
*/

function  funcionesMatemáticas ( x , y )  {
    /*
    objeto Math, integrado en el metalenguaje que permite realizar todo tipo de calculos algoritmicos
    sin olvidar que es un objeto de caracterista estática. - no se instancia el objeto -
    nueva matemática () = variable
    */
var  número  =  8 ; 
consola _ registro ( número )
var  noNumero  =  numero . a la cadena ( ) ;
consola _ registro ( noNumero )
documento _ getElementById ( 'resultado' ) . HTML interno =
'<label style=" color:red; font-weight:bold"> logaritmo: </label> '  +  Math . registro ( 100 )  +  '<br>'  +
'<label style=" color:red; font-weight:bold"> Exponencial:</label> '  +  Matemáticas . exp ( 8 )  +  '<br>'  +
'<label style=" color:red; font-weight:bold"> Raíz Cuadrada: </label> '  +  Matemáticas . sqrt ( número )  +  '<br>'  +
'<label style=" color:red; font-weight:bold"> Potencia de 2 elevado a 8: </label> '  +  Math . poder ( 2 , 8 )  +  '<br>'  +
'<label style=" color:red; font-weight:bold"> Valores Absolutos: </label> '  +  Math . abdominales ( -122.08 ) + '<br> ' +   
'<label style=" color:red; font-weight:bold"> Redondeo Medio: </label> '  +  Matemáticas . redondo ( 72.4542 )  +  '<br>'  +
'<label style=" color:red; font-weight:bold"> Redondeo alza. </label> '  +  Matemáticas . techo ( 72.8542 )  +  '<br>'  +
'<label style=" color:red; font-weight:bold"> Semilla: </label> '  +  Matemáticas . aleatorio ( )  +  '<br>'  +
'<label style=" color:red; font-weight:bold"> Semilla entre el 1 y el 10: </label> '  +  Math . aleatorio ( ) * 10  +  '<br>'  +
'<label style=" color:red; font-weight:bold"> Valor Máximo: </label> '  +  Matemáticas . máximo ( 2 , 8 , 6 , 9 )  +  '<br>'  +
'<label style=" color:red; font-weight:bold"> (Anidacion) coseno Pi: </label> '  +  Math . cos ( Matemáticas . PI )  +  '<br>'  +
/*Fuera del rango del objeto*/
'<label style=" color:red; font-weight:bold"> de numero a string: </label> '  +  noNumero  +  '<br>'  +
''
}

function  cadena de funciones ( )  {
/*
Métodos de configuración, representación, manipulación....de las secuencias de caracteres
*/
    var  texto  =  'JavaScript estructuras de Cadena de Texto' ;
    documento _ getElementById ( 'resultado' ) . HTML interno =
    '<label style=" color:red; font-weight:bold"> Minisculas: </label> '  +  texto . toLocaleLowerCase ( )  +  '<br>'  +
    '<label style=" color:red; font-weight:bold"> Mayúsculas: </label> '  +  texto . toLocaleUpperCase ( )  +  '<br>'  +
    '<label style=" color:red; font-weight:bold"> longitud del texto: </label> '  +  texto . longitud  +  '<br>'  +
    '<label style=" color:red; font-weight:bold"> Valores Unicodes: </label> '  +  texto . indexOf ( 'j' )  +  '<br>'  +
    ''
    
}

function  funcionDate ( )  {
/*
objeto Date, integrado en el metalenguaje que permite acceder y almacenar fechas, horas, ...asociado
datos de calendario. Tendremos en ese instante acceso a un conjunto de métodos.
Al ser un objeto dinámico. - se instancia el objeto - ed:
orientacion a objeto ⇓
    var fecha = nueva Fecha()
*/

var  fecha  =  nueva  Fecha ( ) ;
documento _ getElementById ( 'resultado' ) . HTML interno =
'<label style=" color:red; font-weight:bold"> Fecha: </label> '  + fecha . toLocaleDateString ( )  +  '<br>'  +
'<label style=" color:red; font-weight:bold"> Hora: </label> '  + fecha . toLocaleTimeString ( )  +  '<br>'  +
'<label style=" color:red; font-weight:bold"> Minutos: </label> '  + fecha . obtenerMinutos ( )  +  '<br>'  +
'<label style=" color:red; font-weight:bold"> Segundos: </label> '  + fecha . obtenerSegundos ( )  +  '<br>'  +
''
    
}