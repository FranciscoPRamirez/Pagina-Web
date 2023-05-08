function inicio(x, y) {
    //1º Recogidas de variables
    var hoy = new Date();

    var h = hoy.getHours();
    var m = hoy.getMinutes();
    var s = hoy.getSeconds();//2''
    console.log(s);

    /**Traerme la funcion General I y la hacemos trabajar, como variable funcional */

    h = ajusteHora(h);
    m = ajusteHora(m);
    s = ajusteHora(s)


    //** Genero la variable que he desarrollado en la funcion General II */
    pmOam = meridiano(h);


    var dia = hoy.getDay();
    dia = ajusteHora(dia)
    var mes = hoy.getMonth();
    console.log(mes)
    var año = hoy.getFullYear();

    //2º Represetacion de las variables en el docType.
    document.getElementById('reloj').innerHTML = h + ':' + m + ':' + s + ' ' + pmOam

    //3º difinir la llamada al mes, estructuras de configuracion para detectar el mes
    /*
    Tenemos que tener en cuenta no solo el VALOR de la variable, sino que ahora encontramos
    una diferencia mas a la hora de definir las variables, acceder a ellas o identificarlas, que será
    su POSICION
    */
    switch (mes) {
        case 0:
            mes = 'Enero'
            break;
        case 1:
            mes = 'Febrero'
            break;
        case 2:
            mes = 'Marzo'
            break;
        case 3:
            mes = 'Abril'
            break;
        case 4:
            mes = 'Mayo'
            break;
        case 5:
            mes = 'Junio'
            break;
        case 6:
            mes = 'Julio'
            break;
        case 7:
            mes = 'Agosto'
            break;
        case 8:
            mes = 'Septiembre'
            break;
        case 9:
            mes = 'Octubre'
            break;
        case 10:
            mes = 'Noviembre'
            break;
        case 11:
            mes = 'Diciembre'
            break;
        default:
            mes = '#Error de Conexion'
            break;
    }
    document.getElementById('calendario').innerHTML = dia + ' ' + mes + ' ' + año

    // llamadas a funcion DELIMITANDO EL TIEMPO, callback. Un ejemplod de callback es la funcion
    //setTimeOut(argumento1,argumento2);
    setTimeout(function () { inicio() }, 1000);//Temporizador que si no viene por defecto es 1000 milisegundo
//Entendidas como llamadas redundaantes
}

// ↑ Funciones Generales o modelo (Maquinas Perfectas) tipo donde dependiendo de la variable nos una respuesta.

// Funcion General I; Para generar decenas en cualquier variable fecha que solo muestre unidades
function ajusteHora(x) {
    if (x < 10) {
        x = '0' + x // + concatenador
    }
    return x;// funcion return(), siempre evoca la remision de la variable
}

// Ejercicio, establecer una funcion general donde me indique si es:
// antes del meridiano o 
//despues del meridiano
// ed: am o pm
//Funcion General II ↓
function meridiano(x) {
    if (x < 12) {
        var pmOam = 'AM';
    } else {
        pmOam = 'PM'
    }
    return pmOam
}