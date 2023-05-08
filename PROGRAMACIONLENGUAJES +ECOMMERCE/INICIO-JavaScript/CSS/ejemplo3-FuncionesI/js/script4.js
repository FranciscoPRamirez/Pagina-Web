function autorizacion(x,y) {
    //1º declaracion de variables
    var nombre;
    var apellidos;
    var email;
    // 2º Recogida de Datos
    nombre = document.getElementById('nombre').value;
    apellidos = document.getElementById('apellido').value;
    email = document.getElementById('correo').value;
    //3º Suelta o muestra de los datos
    document.getElementById('resultado').innerHTML='AUTORIZO A: ' + nombre + ' '+ apellidos + ' con el email: ' + email + ' que ha sido valiado'
    }