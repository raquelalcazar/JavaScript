$(window).on("load", inicio)

function inicio(){

    $("precio").val("");

    $.ajax("./php/ejercicio51.php",{success: primero});

    $("#marca").on("change", segundo);
    $("#dimension").on("change", segundo);
}

function primero(resultado){

        var todasMarcas = $(resultado).find("marca");
        var todasDimensiones = $(resultado).find("dimension");

        for(var i=0; i<todasMarcas.length; i++){
            $("#marca").append("<option>" + todasMarcas.eq(i).text() + "</option>");	
        }

        for(var i=0; i<todasMarcas.length; i++){
            $("#dimension").append("<option>" + todasDimensiones.eq(i).text() + "</option>");	
        }
   
}

function segundo(){
   
    var marcaSelect = document.getElementById("marca").value.trim();
    var dimensionSelect = document.getElementById("dimension").value.trim();

    if(marcaSelect != "" && dimensionSelect != ""){

        var cadenaXML = "<televisiones><teles><marca>" + marcaSelect + "</marca><dimension>" + dimensionSelect + "</dimension></teles></televisiones>";

        $.ajax("./php/ejercicio52.php",{ method:"POST",
                                        dataType: "xml", 
                                        data: cadenaXML,
                                        headers: {"content-type":"application/x-www-urlencoded"},
                                        complete: gestionarRespuesta,
                                        contentType: false,
                                        processData: false})
    }
}

function gestionarRespuesta(respuesta){
    //console.log(respuesta);
    //var precio = $(respuesta).find("televisiones").eq(0).find("tele").eq(0).find("precio");
    var uno=$(respuesta).find("televisiones").eq(0);
    
    var dos=$(uno).find("teles").eq(0);
    var tres=$(dos).find("precio").eq(0).text();
    $("#precio").val(tres);
   /* alert(precio.eq(0).text());
    $("#precio").val($(precio).eq(0).text());	*/
}
