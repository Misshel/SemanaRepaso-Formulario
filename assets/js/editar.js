//validacion TRAIDA DE APP.JS (falta corregir)
	var validacionLetras =function (e){
	    var codTecla=e.keyCode;
	    if((codTecla>=97 && codTecla<=122)||(codTecla>=65 && codTecla<=90)||codTecla==32||codTecla==39){
	      return true;
	    } else {
	      return false;
	    }
	}

	//validacion de solo numeros
	var validacionNum =function (e){
	    var codTecla=e.keyCode;
	    if(codTecla>=48 && codTecla<=57 && this.value.length<2){
	      if(e.length<2){
	      return true ;}
	    } else {
	        return false;
	      }
	      //return false;
	    }

	// validacion de imput vacio
	var input = document.getElementsByClassName("imput-registro");
	var error=function(e){
	          if(this.value.trim().length==0){
	            this.value="";
	            this.nextElementSibling.nextElementSibling.innerText="*Este campo es obligatorio";
	          }
	            else{
	            var correc = this.value.split(" ");
	            var datoMayus= "";
	            for(var a =0; a<correc.length;a++){
	            datoMayus += correc[a].charAt(0).toUpperCase() + correc[a].substring(1).toLowerCase() + " ";
	            }
	              this.value = datoMayus;
	          }
	        }
	  for(var i in input){
	      input[i].onblur=error;
	  }
//-----------
window.onload=function(){

	var objetoNewPaciente = JSON.parse(localStorage.getItem("nuevoPaciente"));
	var inputsEditar = document.getElementsByClassName("imput-registro");
console.log(objetoNewPaciente);
	inputsEditar[0].value = objetoNewPaciente.nombre;
	inputsEditar[1].value = objetoNewPaciente.apellido;
	inputsEditar[2].value = objetoNewPaciente.edad;
	inputsEditar[3].value = objetoNewPaciente.genero;
	inputsEditar[4].value = objetoNewPaciente.ciudad;
	inputsEditar[5].value = objetoNewPaciente.pais;

	document.getElementById("boton").addEventListener("click",function(){
  //  if(inputsEditar.length!=0){
	if(inputsEditar[0].length!=0 && inputsEditar[1].length!=0 && inputsEditar[2].length!=0 && inputsEditar[3].length!=0 && inputsEditar[4].length!=0 && inputsEditar[5].length!=0){
    	objetoNewPaciente.nombre=inputsEditar[0].value;
			objetoNewPaciente.apellido= inputsEditar[1].value
			objetoNewPaciente.edad = inputsEditar[2].value;
			objetoNewPaciente.genero = inputsEditar[3].value;
			objetoNewPaciente.ciudad = inputsEditar[4].value
			objetoNewPaciente.pais = inputsEditar[5].value;
console.log(objetoNewPaciente);
			localStorage.setItem("nuevoPaciente",JSON.stringify(objetoNewPaciente));
			window.location="paciente.html"
		}
		else{
			alert("Todos los campos son obligatorios");
			//window.location="editar.html"
		}
	})
};
