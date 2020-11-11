if (document.addEventListener){
	window.addEventListener("load",inicio)
}else if (document.attachEvent){
	window.attachEvent("onload",inicio);
}

function inicio(){
	
	var botonRegistrarse=document.getElementById("registrarse");
	var botonCancelar=document.getElementById("cancelar");
	var botonAceptar=document.getElementById("aceptar");
	
	var botonEntrar=document.getElementById("entrar");
	var botonCancelar2=document.getElementById("cancelar2");
	var botonAceptar2=document.getElementById("aceptar2");
	
	var botonAniadirDef=document.getElementById("aniadirDef");
	
	var botonAniadirLoc=document.getElementById("aniadirLoc");
	
	var botonAniadirCoche=document.getElementById("aniadirCoche");
	
	document.getElementById("aniadirMen").style.display="none";
	
	var select=document.getElementById("provincias");
	var opciones=select.getElementsByTagName("option");
	
	for (var i=0; i<opciones.length; i++){
		
		opciones[i].style.display="none";
	}
	
	if (document.addEventListener) {
		botonRegistrarse.addEventListener("click", verFormRegistro);
		botonCancelar.addEventListener("click", ocultarFormRegistro);
		botonAceptar.addEventListener("click", validarRegistro);
	
		botonEntrar.addEventListener("click", verFormEntrar);
		botonCancelar2.addEventListener("click", ocultarFormEntrar);
		botonAceptar2.addEventListener("click", iniciarSesion);
		
		botonAniadirDef.addEventListener("click", aniadirDef);
		
		botonAniadirLoc.addEventListener("click", aniadirLocalidad);
		
		botonAniadirCoche.addEventListener("click", aniadirCoche);
		
		select.addEventListener("change", verProvincias);
		
	} else if (document.attachEvent){
		botonRegistrarse.attachEvent("onclick", verformRegistro);
		botonCancelar.attachEvent("onclick", ocultarformRegistro);
		botonAceptar.attachEvent("onclick", validarRegistro);

		botonEntrar.attachEvent("onclick", verFormEntrar);
		botonCancelar2.attachEvent("onclick", ocultarFormEntrar);
		botonAceptar2.attachEvent("onclick", iniciarSesion);
	
		botonAniadirDef.attachEvent("onclick", aniadirDef);
		
		botonAniadirLoc.attachEvent("onclick", aniadirLocalidad);
		
		botonAniadirCoche.attachEvent("onlick", aniadirCoche);
		
		select.attachEvent("onchange", verProvincias);
	}
}

function verProvincias(){
	var select=document.getElementById("provincias");
	var opciones=select.getElementsByTagName("option");
	
	var cont=0;
	var encontrado=false;
				
	while(cont<select.length && encontrado==false){
		if(select[i].selected){
			encontrado=true;
		}
		cont++;
	}
		
	var comunidad=select[cont].value;	
	
	for (var i=0; i<opciones.length; i++){
		if(opciones[i].className=comunidad){
			opciones[i].style.display="block";
		}
	}	
}


