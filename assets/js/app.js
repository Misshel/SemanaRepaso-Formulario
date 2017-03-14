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
          return (div.innerHTML = "Nombre: " + formulario.nombre + "<p>" +
                                "Apellido: " + formulario.apellido + "<p>" +
                                "Edad: " + formulario.edad + "<p>" +
                                "Genero: " + formulario.genero + "<p>" +
                                "Ciudad: " + formulario.ciudad + "<p>" +
                                "País: " + formulario.pais + "<p>" );
    }
})*/




var boton = document.getElementById("boton");
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
    this.mostrar=function(){return( "Nombre: " + nombre.nombre + "<p>" +
      "Apellido: " +  apellido.apellido + "<p>" +
      "Edad: " + edad.edad + "<p>" +
      "Genero: " + genero.genero + "<p>" +
      "Ciudad: " + ciudad.ciudad + "<p>" +
      "País: " + pais.pais + "<p>" );
    }

    function imprimir (){
        var  div = document.createElement('div');
        div= document.getElementById('divs');

            return (div.innerHTML = formulario.mostrar)}
  }



        );
