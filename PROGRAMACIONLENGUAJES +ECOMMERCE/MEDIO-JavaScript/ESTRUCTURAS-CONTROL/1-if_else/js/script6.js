function calcular(x, y) {
    //1º Declaracion de Variables y Recogida de Datos
    var peso;
    var altura;
    /*   // a) Recogida con metodo() 
     peso = document.getElementById('calculoPeso').value; */
    // b) Recogido de Datos sin metodo()
    peso = parseFloat(calculoPeso.value);
    altura = parseFloat(calculoAltura.value);
    //2º Variable de apoyo/Secundaria
    var imc = 0;
    /* 3º Formula, o algoritmo del calculo
     imc =peso/altura al cuadrado */
    imc = peso / (Math.pow(altura, 2));
    console.log(imc);
    // 4º Concentraremos en una variable la respuesta
    var respuesta = document.getElementById('resultado');

    /*  5º Definicion de las condiciones  
        * menor de 18.5 o igual limites Extrema Delgadez
        * menores e iguales a 24.9 limites Normales
        * menores e iguales a 29.9 limites Normales con cierto sobrepeso
        * superando los 30.01 alcanzando limites de cierta obesidad   
    */
    if (imc <= 18.5) {

        respuesta.innerHTML = ' <p class="text-warning"> Límite de Extrema delgadez </p>';


    } else if ( imc <= 24.9) {

        respuesta.innerHTML = ' <p class="text-success"> Límites normales';

    } else if (imc <= 29.9) {

        respuesta.innerHTML = ' <p class="text-danger"> Límites normales con cierto sobrepeso';

    } else {


        respuesta.innerHTML = ' <p class="text-dark"> Alcanzado límite de obesidad';
    }
}