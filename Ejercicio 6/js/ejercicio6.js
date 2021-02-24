if (document.addEventListener){
	window.addEventListener("load",inicio);
}else if (document.attachEvent){
	window.attachEvent("onload",inicio);
}

function inicio(){

    document.getElementById("ancho").value="";
    document.getElementById("alto").value="";
    document.getElementById("fondo").value="";

    primero();

    if (document.addEventListener) {
        document.getElementById("marca").addEventListener("change", segundo);
        document.getElementById("electrodomestico").addEventListener("change", segundo);

	} else if (document.attachEvent){
        document.getElementById("marca").attachEvent("onchagne", segundo);
        document.getElementById("electrodomestico").addEventListener("change", segundo);
	}
  
}

function primero(){

    fetch("./php/ejercicio61.php")
        .then(comienzo) 
        .catch(error);
}

function comienzo(respuesta){
    if(respuesta.ok){
        respuesta.json().then(tratar1);
    }
}

function tratar1(datos){
  
    for(var i=0; i<datos.length; i++){
		var opcion=document.createElement("option");
		var contenido=document.createTextNode(datos[i]);
		
		opcion.appendChild(contenido);
		document.getElementById("marca").appendChild(opcion);
	}
   
}

function error(err){
    console.log("Se ha producido un error");
}

function segundo(){
   
    var marcaSelect =  document.getElementById("marca").value;
    var electroSelect =  document.getElementById("electrodomestico").value;

    if(marcaSelect != "" && electroSelect != ""){
   
        var recogidos = {"marca": marcaSelect,
                        "electro": electroSelect};

        var objeto = JSON.stringify(recogidos);

        var inic = {mothod:"POST",
                    headers:{"Content-Type":"application/json"},
                    body: objeto,
                    cache: "no-cache"
                    }

        fetch("./php/ejercicio62.php", inic)
            .then(conmienzo2)
            .catch(error)
    }
}

function conmienzo2(respuesta){
    if(respuesta.ok){
        respuesta.json().then(tratar2);
    }
}

function tratar2(dato){

  /*  $("#ancho").val(objeto.ancho);
    $("#alto").val(objeto.alto);
    $("#fondo").val(objeto.fondo);*/

    document.getElementById("ancho").value=dato.ancho;
    document.getElementById("alto").value=dato.alto;
    document.getElementById("fondo").value=dato.fondo;
}