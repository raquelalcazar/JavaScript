if (document.addEventListener){
	window.addEventListener("load",inicio);
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

function validar(evento){
	var valido=true;
	
	if(comprobarApellidos(document.getElementById("apellidos").value.toUpperCase())==false){
		document.getElementById("errorApellidos").textContent="Apellidos incorrectos";
		valido=false;
	}else{
		document.getElementById("errorApellidos").textContent="";
	}
	
	if(comprobarNombre(document.getElementById("nombre").value.toUpperCase())==false){
		document.getElementById("errorNombre").textContent="Nombre incorrecto";
		valido=false;
	}else{
		document.getElementById("errorNombre").textContent="";
	}
	
	if(comprobarTipoVia(document.getElementById("tipoVia").value)==false){
		document.getElementById("errorTipoVia").textContent="Tipo de vía incorrecto";
		valido=false;
	}else{
		document.getElementById("errorTipoVia").textContent="";
	}
	
	if(comprobarNombreVia(document.getElementById("nombreVia").value)==false){
		document.getElementById("errorNombreVia").textContent="Nombre de vía incorrecto";
		valido=false;
	}else{
		document.getElementById("errorNombreVia").textContent="";
	}
	
	if(comprobarNumero(document.getElementById("numero").value)==false){
		document.getElementById("errorNumero").textContent="Número incorrecto";
		valido=false;
	}else{
		document.getElementById("errorNumero").textContent="";
	}
	
	if(comprobarPortalPuerta(document.getElementById("portal").value)==false){
		document.getElementById("errorPortal").textContent="Portal incorrecto";
		valido=false;
	}else{
		document.getElementById("errorPortal").textContent="";
	}
	
	if(comprobarPiso(document.getElementById("piso").value)==false){
		document.getElementById("errorPiso").textContent="Piso incorrecto";
		valido=false;
	}else{
		document.getElementById("errorPiso").textContent="";
	}
	
	if(comprobarPortalPuerta(document.getElementById("puerta").value)==false){
		document.getElementById("errorPuerta").textContent="Puerta incorrecta";
		valido=false;
	}else{
		document.getElementById("errorPuerta").textContent="";
	}
	
	if(comprobarLocalidad(document.getElementById("localidad").value)==false){
		document.getElementById("errorLocalidad").textContent="Localidad incorrecta";
		valido=false;
	}else{
		document.getElementById("errorLocalidad").textContent="";
	}
	
	if(comprobarProvincia(document.getElementById("provincia").value)==false){
		document.getElementById("errorProvincia").textContent="Provincia incorrecta";
		valido=false;
	}else{
		document.getElementById("errorProvincia").textContent="";
	}

	if(comprobarPais(document.getElementById("pais").value)==false){
		document.getElementById("errorPais").textContent="País incorrecto";
		valido=false;
	}else{
		document.getElementById("errorPais").textContent="";
	}

	if(comprobarPuesto(document.getElementById("puestoTrabajo").value)==false){
		document.getElementById("errorPuestoTrabajo").textContent="Puesto de trabajo incorrecto";
		valido=false;
	}else{
		document.getElementById("errorPuestoTrabajo").textContent="";
	}

	if(comprobarNombreEmpresa(document.getElementById("nombreEmpresa").value)==false){
		document.getElementById("errorNombreEmpresa").textContent="Nombre de empresa incorrecto";
		valido=false;
	}else{
		document.getElementById("errorNombreEmpresa").textContent="";
	}

	if(comprobarCategoria(document.getElementById("categoria").value)==false){
		document.getElementById("errorCategoria").textContent="Categoría incorrecta";
		valido=false;
	}else{
		document.getElementById("errorCategoria").textContent="";
	}

	if(comprobarAficion(document.querySelectorAll("#aficiones")).length<3){
		document.getElementById("errorAficiones").textContent="Se deben seleccionar al menos 3 aficiones.";
		valido=false;
	}else{
		document.getElementById("errorAficiones").textContent="";
	}
	
	if(valido==false){
		evento.preventDefault();
	}else{

		var valor=comprobarValorCookie();
		if(valor!=""){
			document.cookie="aficiones="+valor+"; expires=true,  30 Jan 2013 00:00:00 GMT;";

		}

		valor=crearValorCookie();

		document.cookie="aficiones="+valor+"; expires=true,  30 Jan 2030 00:00:00 GMT;";

		document.getElementById("mensaje").textContent=valor;
		
	}
}

var letras=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeros="0123456789";

function comprobarApellidos(apellidos){
	var expRegApellido=/^[a-záéíóú][a-záéíóú\s\-]{5,}[a-záéíóú]$/i;

	return expRegApellido.test(apellidos);
}

function comprobarNombre(nombre){
	var expRegNombre=/^[a-záéíóú][a-záéíóú\sºª.]{1,28}[a-záéíóú]$/i;

	return expRegNombre.test(nombre);
}

function comprobarTipoVia(tipoVia){
	var expRegVia=/^Calle||Plaza||Camino||Avenida||Plazuela||Bulevar||Carretera||Paseo||Travesía$/;/*no*/

	return expRegVia.test(tipoVia);
}

function comprobarNumero(num){
	var expRegNumero=/^\d||([s][\/][n])$/;

	return expRegNumero.test(num);/*no*/
}

function comprobarPortalPuerta(elemento){
	var expReg=/^[a-záéíóú\d]*$/;

	return expReg.test(elemento);
}

function comprobarPiso(piso){
	var expRegPiso=/^\d*$/;

	return expRegPiso.test(piso);
}

function comprobarNombreVia(nombre){
	var expReg=/^[a-záéíóú][a-záéíóú\s]{1,33}[a-záéíóú]$/i;
	
	return expReg.test(nombre);
}

function comprobarLocalidad(localidad){
	var expReg=/^[a-záéíóú][a-záéíóú\s]{1,38}[a-záéíóú]$/i;
	
	return expReg.test(localidad);
}

function comprobarProvincia(provincia){
	var expReg=/^[a-záéíóú][a-záéíóú\s]{4,30}[a-záéíóú]$/i;
	
	return expReg.test(provincia);
}

function comprobarPais(pais){
	var expReg=/^[a-záéíóú][a-záéíóú\s]{6,26}[a-záéíóú]$/i;
	
	return expReg.test(pais);
}

function comprobarPuesto(puesto){
	var expReg=/^[a-záéíóú][a-záéíóú\s\d\-]{8,23}[a-záéíóú]$/i;
	
	return expReg.test(puesto);
}

function comprobarNombreEmpresa(nombre){
	var expReg=/^[a-záéíóú][a-záéíóú\s\d\-.]{4,23}[a-záéíóú]$/i;
	
	return expReg.test(nombre);
}

function comprobarCategoria(categoria){
	var expReg=/^[a-záéíóú][a-záéíóú\s\d.]{6,18}[a-záéíóú]$/i;
	
	return expReg.test(categoria);
}

function comprobarAficion(aficiones){

	var cont=0;
	var cont2=0;
	var encontrados=new Array();

	while(cont<aficiones.length){
		if(aficiones[cont].checked){
			encontrados[cont2]=aficiones[cont];
			cont2++;
		}

		cont++;
	}

	return encontrados;

}

function crearValorCookie(){
	
	var marcados=comprobarAficion(document.querySelectorAll("#aficiones"));

	return marcados.length;
}

function comprobarValorCookie(){
	var cookies=document.cookie;
	var cookieBuscada="aficiones=";
	var valor="";

	if(cookies.length!=0){
		var pos=cookies.indexOf(cookieBuscada);

		if(pos!=-1){
			pos2=cookies.indexOf("=", pos+1);
			pos3=cookies.indexOf(";", pos2+1);
				
			if(pos3==-1){
				pos3=cookies.length;
			}
				
			valor=cookies.substring(pos2+1, pos3);
				
			if(valor.lenght==0){
				existe=false;
			}
			
		}	
	}

	return valor;
}
