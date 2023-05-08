function presiona(x, y) {
    //1 declarado las variables
    var fecha = new Date()//Eje
    var dia = fecha.getDay()//Apoyo
    console.log(dia)
    var respuesta = document.getElementById('resultado');
    switch (dia) {
        case 1:
            respuesta.innerHTML = 
            'Cocido Madrileño'
            break;
        case 2:
            respuesta.innerHTML = 
            'Libre por Descanso'
            break;
        case 3:
            respuesta.innerHTML = 
            'Cocido Montañes'
            break;
        case 4:
            respuesta.innerHTML = 
            'Caldo y Pote Gallego'
            break;
        case 5:
            respuesta.innerHTML = 
            'Paella valenciana'
            break;
        case 6:
            respuesta.innerHTML = 
            'Judiones a la bilbaina'
            break;
        case 7:
            respuesta.innerHTML = 
            'Fabada Asturiana'
            break;
            

        default:
            respuesta.innerHTML = 
            '#Error de Conexion#'
            break;
    }




}