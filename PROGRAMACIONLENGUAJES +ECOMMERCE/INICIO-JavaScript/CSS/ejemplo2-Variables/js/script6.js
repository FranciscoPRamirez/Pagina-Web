//1 declaracion variables eje
var dato1 = parseInt(prompt('Introduce 1º numero 🚀'));
var dato2 = parseInt(prompt('introduce tu 2º número 🎯'));
//2 variable secundario
var suma = (dato1 + dato2);
var resta = (dato1 - dato2);
var multiplicacion = (dato1 * dato2);
var division = (dato1 / dato2);
//3 Mostra las variables
swal('los valores seleccionados han sido: ' + dato1 + ' &' + dato2 + '\n' +
    'la suma es: ' + suma + '\n' +
    'la division es: ' + division + '\n' +
    'la multiplicacion es: ' + multiplicacion +'\n' +
    'la resta es: ' + resta + '\n' +
    'la division es: ' + division
);
document.write(

    '<h2>los valores seleccionados han sido:</h2> ' + '<p>' + dato1 + ' & ' + dato2 + '<br>' + '<hr>'+
    '<h2>la suma es: ' + suma + '<br>' +
    '<h2>la division es: ' + division + '<br>' +
    '<h2>la multiplicacion es: ' + multiplicacion +'<br>' +
    '<h2>la resta es: ' + resta + '<br>' +
    '<h2>la division es: ' + division
);
