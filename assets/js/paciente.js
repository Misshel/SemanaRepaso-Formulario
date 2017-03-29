window.onload=function () {
  var nombrePaciente= document.getElementById('nombre-Paciente');
  var apellido= document.getElementById('apellido-Paciente');
  var edad= document.getElementById('edad-Paciente');
  var genero= document.getElementById('genero-Paciente');
  var ciudad= document.getElementById('ciudad-Paciente');
  var pais= document.getElementById('pais-Paciente');
  //obtengo el objeto del idex.html
  var objetoPaciente= JSON.parse(localStorage.getItem("nuevoPaciente"));

  nombrePaciente.innerText=objetoPaciente.nombre;
  apellido.innerText=objetoPaciente.apellido;
  edad.innerText=objetoPaciente.edad;
  genero.innerText=objetoPaciente.genero;
  ciudad.innerText=objetoPaciente.ciudad;
  pais.innerText=objetoPaciente.pais;

  console.log(objetoPaciente);
  function Paciente(nombrePaciente, apellidoPaciente, edadPaciente, generoPaciente,ciudadPaciente,paisPaciente) {
		this.nombre = nombrePaciente;
		this.apellido = apellidoPaciente;
		this.edad = edadPaciente;
		this.genero = generoPaciente;
		this.ciudad = ciudadPaciente;
		this.pais = paisPaciente;
	};

	document.getElementById("Editar").addEventListener("click",function(){
		window.location="editar.html";
	});
};
