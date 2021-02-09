$(window).on("load", inicio)

function inicio(){
    $("#boton").on("click", obtenerNota);
}

function obtenerNota(){
    
    var nombre=$("#nombre").val();
    var apellidos=$("#apellidos").val();
    var modulo=$("#modulo").val();

    if(nombre!="" && apellidos!="" && modulo!=""){
       
       $.get("../php/ejercicio2.php", {nombre:"f",apellidos:"apellidos",modulo:"modulo"},mostrar);
    }
}

function mostrar(valor){
    $("#nota").text(valor);   
}
