$(window).on("load", inicio)

function inicio(){

    $.ajax("./php/ejercicio61.php",{success: primero});

    $("#marca").on("change", segundo);
    $("#electrodomestico").on("change", segundo);
  
}

function primero(respuesta){

        var marcas = JSON.parse(respuesta);

        for(var i=0; i<marcas.length; i++){
            $("#marca").append("<option>" + marcas[i] + "</option>");	
        
        }      
}

function segundo(){
   
    var marcaSelect =  $("#marca").val().trim();
    var electroSelect =  $("#electrodomestico").val().trim();

    if(marcaSelect != "" && electroSelect != ""){
     
        var objeto = new Object();
        objeto.marcaSelect = marcaSelect;
        objeto.electroSelect = electroSelect;

        var objeto2 = JSON.stringify(objeto);

        $.ajax("./php/ejercicio62.php",{ method:"POST",
                                        dataType: "json", 
                                        data: objeto2,
                                        headers: {"content-type":"application/x-www-urlencoded"},
                                        complete: gestionarRespuesta,
                                        contentType: false,
                                        processData: false})
    }
}

function gestionarRespuesta(response){

    var objeto = JSON.parse(response);

    $("#ancho").val(objeto.ancho);
    $("#alto").val(objeto.alto);
    $("#fondo").val(objeto.fondo);
}
