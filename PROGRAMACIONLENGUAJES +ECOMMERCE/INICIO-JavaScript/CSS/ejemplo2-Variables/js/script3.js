
//1º declaro variable
var nombre;
var apellidos;
var edad;
//2º Asignar valor
/* nombre ='Toño'   */
//3º Asignarlo a través de un metodo
nombre = window.prompt('Introduce tu nombre');
apellidos = prompt('Introduce tus apellidos');
edad = prompt('Introduce tu edad');
/*
En ocasiones el propio sistema operativo del usurio contribuye a la gestion y el buen
funcionamiento de los recurso.
window.prompt()
*/

/*1º*/
document.write(
    '<h2>Acceso confirmado al Curso Programacion lenguajes de guión; </h2>' +
   '<p>'+ nombre + ' ' +
    apellidos +
    ', con una edad de:  ' +
    edad + ' años'+
    '</p>'
    );
/*2º*/
console.log(
    'Acceso permitido a' + '\n'+
    nombre + 
    ' ' + 
    apellidos + 
    '\n'+
    'con edad de: ' +
    edad + 'años'  
);

/*3º*/
swal(
    {
        title: "ACCESO!",
        text: "Autorizado",
        icon: "success",
        button: "Continuar",
    }
);
