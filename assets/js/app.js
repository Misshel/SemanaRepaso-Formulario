  /*var boton = document.getElementById("boton");
   boton.addEventListener("click",function formulario(nombre,apellido,edad,genero,ciudad,pais){
      nombre= document.getElementById('nombre').value;
      apellido= document.getElementById('apellido').value;
      edad= document.getElementById('edad').value;
      genero= document.getElementById('genero').value;
      ciudad= document.getElementById('ciudad').value;
      pais= document.getElementById('pais').value;

      this.nombre=nombre;
      this.apellido=apellido;
      this.edad=edad;
      this.genero=genero;
      this.ciudad=ciudad;
      this.pais=pais;
      this.mostrar= function(){
        var  div = document.createElement('div');
        div= document.getElementById('divs');
            return (div.innerHTML = "Nombre: " + formulario.nombre + "<br>" +
                                  "Apellido: " + formulario.apellido + "<br>" +
                                  "Edad: " + formulario.edad + "<br>" +
                                  "Genero: " + formulario.genero + "<br>" +
                                  "Ciudad: " + formulario.ciudad + "<br>" +
                                  "País: " + formulario.pais + "<br>" );
      }
  })*/

//---------------------------------------------------------------------------------------------------

//validacion de solo letras
/*los codigos del:
 97 al 122 son letras "minusculas"
 65 al 90 sn letras "MAYUSCULAS"
 39 es el apostrofe
 32 el espacio
 48 al 57 son números
*/
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

//aplicacion de validacion
var nombrePaciente= document.getElementById('nombre');
  nombrePaciente.onkeypress=validacionLetras;
var apellido= document.getElementById('apellido');
  apellido.onkeypress=validacionLetras;
var edad= document.getElementById('edad');
  edad.onkeypress=validacionNum;
var genero= document.getElementById('genero');
  genero.onkeypress=validacionLetras;
var ciudad= document.getElementById('ciudad');
  ciudad.onkeypress=validacionLetras;
var pais= document.getElementById('pais');
  pais.onkeypress=validacionLetras;

//funcion que se ejecuta al hacer click
  var boton = document.getElementById("boton");
   boton.addEventListener("click",function(){
      var nombrePaciente= document.getElementById('nombre').value;
      var apellido= document.getElementById('apellido').value;
      var edad= document.getElementById('edad').value;
      var genero= document.getElementById('genero').value;
      var ciudad= document.getElementById('ciudad').value;
      var pais= document.getElementById('pais').value;

      if(nombrePaciente.length !=0 && apellido.length!=0 && edad.length != 0 && genero.leng != 0 && ciudad.length != 0 && pais.length != 0 ){
        var pacienteActual = new Form(nombrePaciente,apellido,edad,genero,ciudad,pais)
        //lo comentado se usa para imprimir los datos en la misma pagina delformulario
        /*var etiqueta1 = document.getElementById('divs');
        var  div = document.createElement('div');
        div.innerHTML = pacienteActual.mostrar();
        console.log(pacienteActual.mostrar())
        etiqueta1.appendChild(div)*/
        //para usar la informacion en varias paginas
        localStorage.setItem("nuevoPaciente",JSON.stringify(pacienteActual));
        document.getElementById("miForm").reset();
        window.location="paciente.html";
      } else {
          alert("Ingresar datos completos");
      }
    });
    //estructura que se imprime
  function Form(nombre,apellido,edad,genero,ciudad,pais){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.genero=genero;
    this.ciudad=ciudad;
    this.pais=pais;
    this.mostrar=function(){
      return( "<p><br>Nombre: " + this.nombre + "</br>" +
      "<br>Apellido: " +  this.apellido + "</br>" +
      "<br>Edad: " + this.edad + "</br>" +
      "<br>Genero: " + this.genero + "</br>" +
      "<br>Ciudad: " + this.ciudad + "</br>" +
      "<br>País: " + this.pais + "</br></p>" );
    }
  }
