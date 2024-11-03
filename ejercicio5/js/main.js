
function newElement(){

    const lista = document.getElementById("lista");

    // contamos el numero de li's y le sumamos 1
    numNodos = lista.getElementsByTagName('li').length + 1;
    // creamos un nuevo li y le añadimos la clase
    nuevo = document.createElement("li");
    nuevo.classList.add("list-group-item");
    // creamos el texto incluyendo la posicion que es el numNodos
    // lo incluimos en el nuevo nodo
    texto = document.createTextNode("Elemento " + numNodos);
    nuevo.appendChild(texto);
    
    // añadimos a la lista el nuevo nodo con su texto
    lista.appendChild(nuevo);
    
}