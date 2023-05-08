
function calcularlibro(){


var condition= document.getElementById("condition").value ;
    
if (condition<5){            

        alert("Tu pudes solicitar prestamos"); 

}   else if (condition==5){
 
       alert("Tienes que devolver los libros prestados");      
}
    else{   

        alert ("Por tu NIE no pudes sacar libros");
}

}
