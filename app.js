//Archivo que contiene la lógica para agregar amigos a la lista y luego sortear un nombre aleatorio

// Inicialización de variables
let arrayAmigos = [];
let maxNombres = 6; // A futuro este valor lo indicará el usuario
let cantidadNombres = 0;

/*Función que permite agregar nombres al arreglo*/
function agregarNombres() {
    let textoIngresado = document.getElementById('amigo').value;
    
    if (validarTextoVacio(textoIngresado)){ //Validamos si el texto ingresado es vacio
        alert("Debe ingresar un nombre");
        limpiarInputAmigo ();
    } else {
        if (arrayAmigos.includes(textoIngresado)) { //Valida que el nombre no se encuentre ya ingresado
            alert("El nombre ya se encuentra registrado, ingrese un nuevo nombre");
            limpiarInputAmigo();
        } else {
            arrayAmigos.push(textoIngresado); //Agramos el texto ingresado al arreglo
            cantidadNombres++; //Contador para la cantidad de nombres ingresados
            limpiarInputAmigo(); // Limpiamos el input para ingresar un nuevo nombre
   
            let listaHTML = document.getElementById('listaAmigos'); //Obtengo la lista de HTML
            listaHTML.innerHTML = ""; //Limpio la lista para no generar duplicados
            for (let i = 0; i < cantidadNombres; i++){
                let elementoLista = document.createElement('li'); //Creo el elemento li
                elementoLista.textContent = arrayAmigos[i]; //asigno el valor ingresado
                listaHTML.appendChild(elementoLista);
            }
        }
    }
}

/*Función que valida que el texto ingresado no sea vacío*/
function validarTextoVacio(textoUsuario) {
    if (textoUsuario.length == 0){
        return true;
    } else {
        return false;
    }
}


/*Función que realiza el sorteo aleatorio por medio de indice random*/
function sorteoAleatorio() {

    //Validar que el arreglo no esté vacio
    if (arrayAmigos.length === 0) {
        alert("No es posible realizar sorteo, debe ingresar al menos dos nombres")
    } else {
        if (arrayAmigos.length >=2){
        //realiza sorteo
        let idNombreSeleccionado = 0;
        idNombreSeleccionado = generarIndice(cantidadNombres);
        
        let nombreElegido = arrayAmigos[idNombreSeleccionado]; //Selecciona el elemento del arreglo según el id de la funcion
        document.getElementById('resultado').innerHTML = nombreElegido; //Despliega el elemento seleccionado   
        } else {
            //Alerta no se pueden sortear con 1 nombres
            alert ("No es posible realizar el sorteo, agregue mas nombres a la lista");
            limpiarInputAmigo ();
        }
    }
}

/*Función que genera un indice en base a la cantidad de nombres ingresados */
function generarIndice(indiceMaximo) {
  let numeroAleatorio = 0;
  do {
    numeroAleatorio = Math.floor(Math.random()*indiceMaximo)+1; //Genera numero random
  } while (numeroAleatorio >= indiceMaximo); // Se repite si el número supera o es igual máximo.
  return numeroAleatorio;
}

/*Función que valida que el input solo permita ingresar letras */
function validarSoloTexto(elemento) {
    elemento.value = elemento.value.replace(/[^a-zA-Z]/g, '');
}

/*Función que permite limpiar el input de nombre*/
    function limpiarInputAmigo () {
    document.querySelector('#amigo').value = '';
    document.querySelector('#amigo').focus();
}

    
