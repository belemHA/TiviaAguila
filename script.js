var pagina=0;
var nombre='';
var trivia='';
inicial();
function inicial(){
  //7con este obtengo el elemento del html
  var elemento=document.getElementById('next');
  //con este ya lo oculto
  elemento.style.display='none';

}
//Función para seleccionar la trivia
function seleccionarTrivia(opcion){
  if (opcion==1){
    trivia="Ajolote";
    }else {
      trivia="Aguila";
    }
    //invocar la funcion siguiente
    siguiente();
    //7con este obtengo el elemento del html
    var elemento=document.getElementById('next');
    //con este ya lo oculto
    elemento.style.display='block';

}

//Función que permite ir de una pregunta a otra
function siguiente(){
  ocultarPantallas();
  ocultarPantallasAguilas();
  if (pagina==0){
    nombre=document.getElementById('nombre').value;
  }
  
  if (pagina<=4){
    pagina=pagina+1;
    var elemento=document.getElementById('divPregunta'+trivia+pagina);
    elemento.style.display='block';
    }else
      {
        var element=document.getElementById('pantallaFinal');
        element.style.display='block';
        resultado();
      }
}
function ocultarPantallas()

















{
  document.getElementById('pantallaBienvenida').style.display='none';











  document.getElementById('divPreguntaAjolote1').style.display='none';


















  document.getElementById('divPreguntaAjolote2').style.display='none';
  document.getElementById('divPreguntaAjolote3').style.display='none';
  document.getElementById('divPreguntaAjolote4').style.display='none';
  document.getElementById('divPreguntaAjolote5').style.display='none';
  document.getElementById('pantallaFinal').style.display='none';
}
//La que me guarda los aciertos o los errores de las preguntas
function resultado(){
  var punto=0; 
  if (trivia=='Ajolote'){
    var pregunta1=document.getElementById('preguntaAjolote1').value;
 
    if (pregunta1=='1A')
    {
      punto=punto+1;
    }
    var pregunta2=document.getElementById('preguntaAjolote2').value;
    if(pregunta2=='2B')
    {
      punto=punto+1;
    }
    var pregunta3=document.getElementById('preguntaAjolote3').value;
    if(pregunta3=='3A')
    {
        punto=punto+1;
    }
    var pregunta4=document.getElementById('preguntaAjolote4').value;
    if(pregunta4=='4B')
    {
      punto=punto+1;
    }
    var pregunta5=document.getElementById('preguntaAjolote5').value;
    if(pregunta5=='5C')
    {
      punto=punto+1;
    }
  }else{
    var pregunta1=document.getElementById('preguntaAguila1').value;
 
    if (pregunta1=='1A')
    {
      punto=punto+1;
    }
    var pregunta2=document.getElementById('preguntaAguila2').value;
      if(pregunta2=='2B')
    {
      punto=punto+1;
    }
    var pregunta3=document.getElementById('preguntaAguila3').value;
    if(pregunta3=='3A')
    {
      punto=punto+1;
    }
    var pregunta4=document.getElementById('preguntaAguila4').value;
    if(pregunta4=='4B')
    {
      punto=punto+1;
    }
    var pregunta5=document.getElementById('preguntaAguila5').value;
    if(pregunta5=='5C')
    {
      punto=punto+1;
    }
    
    }

  document.getElementById('mostrarResultado').innerHTML=punto;
  document.getElementById('mostrarnombre').innerHTML=nombre;
  }
  function volverAJugar(){
    //pagina=0;
    //ocultarPantallas();
    //document.getElementById('pantallaBienvenida').style.display='block';
    location.reload()
    
  }

  //Inicia trivia Aguila
  function ocultarPantallasAguilas()
{
  document.getElementById('pantallaBienvenida').style.display='none';
  document.getElementById('divPreguntaAguila1').style.display='none';
  document.getElementById('divPreguntaAguila2').style.display='none';
  document.getElementById('divPreguntaAguila3').style.display='none';
  document.getElementById('divPreguntaAguila4').style.display='none';
  document.getElementById('divPreguntaAguila5').style.display='none';
  document.getElementById('pantallaFinal').style.display='none';
}




