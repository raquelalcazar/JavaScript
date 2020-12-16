$(window).on("load", inicio);

function inicio(){
	
/*	$("#aniadirMen").hide();*/

	$("#registrarse").on("click", verFormRegistro);
	$("#cancelar").on("click", ocultarFormRegistro);
	$("#aceptar").on("click", validarRegistro);

	$("#entrar").on("click", verFormEntrar);
	$("#cancelar2").on("click", ocultarFormEntrar);
	$("#aceptar2").on("click", iniciarSesion);

	$("#aniadirDef").on("click", aniadirDef);
	$("#aniadirLoc").on("click", aniadirLocalidad);

	$("#aniadirCoche").on("click", aniadirCoche);

	$("#comunidades").on("change", verProvincias);

	$("#aniadirMen").on("click", verFormMen);
	$("#aceptar3").on("click", validarMensaje);
	$("#cancelar3").on("click", ocultarFormMen);

	$("#comunidades").trigger("change");
}
function verFormMen(){
	$("#titulo").val("");
	$("#comentario").val("");
	$("#errorTitulo").val("");
	$("#errorComentario").val("");
	
	$("#formMen").show();
}

function validarMensaje(){
	var titulo=$("#titulo").val();
	var comentario=$("#comentario").val();
	alert(titulo);
	alert(comentario);
	if(titulo==""){
		$("#errorTitulo").val("Debe añadirse un título");
		
		if(comentario==""){
			$("#errorComentario").val("Debe añadirse un comentario");
		}else{
			$("#errorComentario").val("");
		}
	}else{
		$("#errorTitulo").val("");
		
		if(comentario==""){
			$("#errorComentario").val("Debe añadirse un comentario");
		}else{
			$("#errorComentario").val("");

			var usuario=$("#nombreUsuario").html();
			
			var nombreUsuario=usuario.substr(8, usuario.length);
			
			aniadirMensaje(nombreUsuario, titulo, comentario);
			
		}
		
	}
	
}
