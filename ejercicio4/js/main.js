let hidden = true;

function toggleText(){
    // seleccionamos el texto e intercambiamos la clase
    const myText = document.getElementById("myText");
    myText.classList.toggle("hidden");

    // seleccionamos el link y modificamos el texto 
    // segun el valor de la variable hidden
    const myLink= document.getElementById("myLink");

    if(hidden){
        myLink.innerHTML = "Ocultar exceso de texto";
    }else{
        myLink.innerHTML = "Seguir leyendo";
    }
    
    hidden=!hidden;
}