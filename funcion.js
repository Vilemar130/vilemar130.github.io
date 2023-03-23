/**muestra la informacion de la seccion */
document.getElementById("inf").addEventListener ("click", function (){
    document.getElementById("datos").style.display ="block" ;
});

document.getElementById("inf").addEventListener ("click", function (){
    document.getElementById("nota").style.display ="none" ;
});

document.getElementById("cerrar").addEventListener ("click", function (){
    document.getElementById("datos").style.display ="none" ;
});

document.getElementById("cerrar").addEventListener ("click", function (){
    document.getElementById("nota").style.display ="block" ;
});

document.getElementById("form").addEventListener ("click", function (){
    document.getElementById("formacion").style.display ="block" ;
});

document.getElementById("form").addEventListener ("click", function (){
    document.getElementById("nota").style.display ="none" ;
});

document.getElementById("volver").addEventListener ("click", function (){
    document.getElementById("formacion").style.display ="none" ;
});

document.getElementById("volver").addEventListener ("click", function (){
    document.getElementById("nota").style.display ="block" ;
});

document.getElementById("exp").addEventListener ("click", function (){
    document.getElementById("experiencia").style.display ="block" ;
});

document.getElementById("exp").addEventListener ("click", function (){
    document.getElementById("nota").style.display ="none" ;
});

document.getElementById("atras").addEventListener ("click", function (){
    document.getElementById("experiencia").style.display ="none" ;
});

document.getElementById("atras").addEventListener ("click", function (){
    document.getElementById("nota").style.display ="block" ;
});