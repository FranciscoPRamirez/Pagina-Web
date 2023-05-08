function mensaje(x,y) {// Representacion de informacion
    //1º Declaracion de variables
    var clave;
    var email;
    //2º Recogemos datos/variables
    clave = document.getElementById('password').value;
    email =document.getElementById('correo').value;
    document.getElementById('resultado').innerHTML=
    'Autorizo a: ' + email + '<br>'+ 'Continue... Click al Boton acceso'

}
function limpiar() {
    document.getElementById('resultado').innerHTML=''
}
function ordenSecundaria() {
    window.location.href='https://www.google.com/'

    
}
function descarga(){
    window.print();
}
