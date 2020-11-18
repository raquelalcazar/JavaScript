if (document.addEventListener){
	window.addEventListener("load",inicio)
}else if (document.attachEvent){
	window.attachEvent("onload",inicio);
}

function inicio(){
	
	var formulario=document.getElementById("registroUsuario");
	
	if (document.addEventListener) {
		formulario.addEventListener("submit", validar);
	
	} else if (document.attachEvent){
		formulario.attachEvent("onsubmit", validar);
	}
}

function validar(){
	var valido=true;
	
	if(comprobarApellidos(document.getElementById("apellidos").value)==false){
		document.getElementById("errorApellidos").value="Apellidos incorrectos";
		valido=false;
	}else{
		document.getElementById("errorApellidos").value="";
	}
	
	return valido;
}

var letras=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function comprobarApellidos(apellidos){
	var resultado=true;
	
	if(apellidos.length<7){	
		resultado=false;
	}else{
		if(letras.includes(apellidos.charAt(0).toUpperCase())==false || letras.includes(apellidos.charAt(apellidos.length-1).toUpperCase())==false){
			resultado=false;
		}else{
			var cont=1;
			
			while(cont<apellidos.length-1 && resultado==true){
				if(letras.includes(apellidos.charAt(cont))==false && apellidos.charAt(cont)!=" " && apellidos.charAt(cont)!="-"){
					resultado=false;
				}
			}
		}
	}
	
	return resultado;
	
}
