let hidden1 = true;
let hidden2 = true;
let hidden3 = true;

function toggleText(id){
    // seleccionamos el texto e intercambiamos la clase
    const myText = document.getElementById(id);
    myText.classList.toggle("hidden");
    
    // seleccionamos el link 
    const myLink= document.getElementById("link"+id);
// definimos el valor de la variable hidden segun su id
// actualizamos el valor de la variable hidden asociada(1,2 o 3)
// segun corresponda con el id
    let hidden;
    if (id == 'text1') {
        hidden = hidden1;
        hidden1 = !hidden1;
    } else if (id == 'text2') {
        hidden = hidden2;
        hidden2 = !hidden2;
    } else if (id == 'text3') {
        hidden = hidden3;
        hidden3 = !hidden3;
    }
  // evaluamos la variable hidden para modifica el texto
    if(hidden){
        myLink.innerHTML = "Mostrar contenidos";
    }else{
        myLink.innerHTML = "Ocultar contenidos";
    }
    
   
   
}