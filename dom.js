/*

DOM (Document Object Model/ Modelo de Objetos del Documento)

Cuando creamos paginas que usan HTML + CSS estamos creando paginas estaticas (porque no tiene interactividad), cuando agregamos JS, nuestas paginas se convierten en sitios dinamicos (tienen interactividad)

El navegador lee el documento html de arriba a abajo, de izquierda a derecha (renderización)

Para que una pagina se renderice correctamente se toma en cuenta el contenido, el peso de las imagenes, la conexion a internet, etc.

Cuando el documentto se renderiza se crea un "arbol" (DOM), tiene muchas ramas que son las etiquetas y cada uno de los elementos que tenemos dentro de esas etiqueta se consideran "hojas" (nodos).

Cuando hablamos del DOM y entendemos que se representa como un arbol con ramas y hojas, entendemos que cada una de estas ramas y hojas es un nodo.

Que es un nodo?
Representación más básica de lo que existe en un DOM, puede ser un elemento o etiqueta, puede ser  un atributo, puede ser un texto, incluso un comentario.

    - Document: Nodo raiz, a partir del cual se derivan los demás nodos. Es el objeto a partir del cual se pueden acceder a cualquier elemento dentro de el. Todos los nodos derivan de este.

    - Element: Son nodos definidos por etiqueta html (div, h1, p, img, meta, head, script, etc), ya sea que se vean o no se vean (etiquetas que interpreta el navegador).

    - Text: El texto que hay dentro de un elemento se considera un nodo, con la caracteristica que es un nodo hijo.

    - Atribbutes: los atributo de las etiquetas tambien se convierten en nodos. Son nodos que estan asociados a un elemento y se pueden considerar también nodos hijos.

    - Comment: Los comentarios también son un nodo, porque forma parte del documento.



    ¿Para que utilizamos JS en un DOM?
        - Agregar elemento HTML
        - Modificar elementos HTML
        - Borrar elementos HTML
*/

//Comenzamos a trabajar con los nodos de mi documento html

// 1er. paso: guardar los elementos HTML en variables de JS (let, var, const)

/*Metodos de seleccion de elementos: permiten traer una etiqueta html y guardarla para su uso posterior.

    Metodos tradicionales
        - getElementByID (trae un elemento por ID)
        - getElementsByTagName
        - getElementsByClassName



*/

//Aqui obtengo un elemento por ID
const nombrePaciente=document.getElementById("nombrePaciente");
console.log(nombrePaciente);//imprime: <input type="text" class="form-control" id="nombrePaciente" placeholder="Nombre Paciente">


//Aqui obtengo varios elementos por clase
let columnas=document.getElementsByClassName("col");
console.log(columnas);

//Aqui obtengo varios elementos por nombre de Etiqueta
const inputs=document.getElementsByTagName("input");
console.log(inputs);

/*

Metodos actuales

La unica diferencia entre el querySelector y el getElement, es que tenemos que especificar el tipo de selector que usaremos (. para las clases, # para los id)

    - document.querySelector
    - document.querySelectorAll


*/


//Aqui obtengo un elemento por el selector #
let containerPadre=document.querySelector("#containerPadre");
console.log(containerPadre);

//Aqui obtengo varios elementos por el selector .
let containers=document.querySelectorAll(".container");
console.log(containerPadre);


/*

Metodos para modificar elementos en su texto

    - innerHTML: Esta propiedad nos permite acceder y modificar el contenido de nuestro elemento. Asignamos una cadena de texto y podemos modificar o eliminar el texto.(ya existe el texto)

    - textContent: Cambiar o recuperar el contenido dentro de un elemento. Podemos modificar o eliminar el texto (crear un texto nuevo)

*/

//Modificando el texto de un h1 con innerHTML
let titulo=document.getElementById("titulo");

titulo.innerHTML="Nuevo texto de mi titulo";

//Creando un nuevo texto con innerHTML
let textoConfirmacion=document.getElementById("mensajeConfirmacion");
textoConfirmacion.innerHTML="<p>Mensaje de Confirmación</p>";

/*

Crear elementos

    - Crear el elemento
        - createElement
        - createTextNode
        - createComment

    - Poner el elemento
        - append
        - appendChild

*/

//Creando un elemento con createElement
let imagen=document.createElement("img");

//Crear los atributos de un elemento
imagen.src="https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
imagen.alt="Foto de perrito feliz";

//Poner mi imagen en el contenedor
textoConfirmacion.appendChild(imagen);