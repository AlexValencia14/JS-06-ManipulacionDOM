/*Sistema para registrar pacientes y mostrarlos en tarjetas*/

//Primer paso: obtener todos los elemetos de nuestro HTML y guardarlos en variables JS

//Inputs, boton, mensajeConfirmacion
let nombrePaciente = document.getElementById("nombrePaciente");//input nombre
let edadPaciente= document.getElementById("edadPaciente");//input edad
let botonRegistrarPaciente=document.getElementById("btnRegistrarPaciente");//boton
let mensajeConfirmacion=document.getElementById("mensajeConfirmacion");//container mensaje de confirmacion
// let contenedorTarjetas=document.getElementById("contenedorTarjetas");

//Array para almacenar a mis pacientes
let pacientes=[];

//Funcion para registrar un nuevo paciente
function registrarPaciente(){

    //obtengo el atributo value de mi input
    let valorNombrePaciente= nombrePaciente.value;
    let valorEdadPaciente= edadPaciente.value;

    //Array para guardar la información del paciente
    let paciente={
        nombre : valorNombrePaciente,//tomo el valor del input y lo asigno a esta variable
        edad : valorEdadPaciente,//tomo el valor del input y lo asigno a esta variable
        citas :[]
    };

    //Cuando tengo la información del paciente lo almaceno en el arreglo
    pacientes.push(paciente);//array.push(valorAAgregar)

    //1 Muestro info en consola
    mostrarInfoPaciente(paciente);//Invocacion de otra funcion para mostrar la info en consola

    //2 Muestro el mensaje de confirmacion (textContent)
    mensajeConfirmacion.textContent="Paciente registrado correctamente";

    //3 Genero la tarjeta
    generarTargetaPaciente(paciente); //Invocacion de una funcion para generar tarjetas

    return paciente;
    
}

//Funcion para mostrar la información del paciente en la consola
function mostrarInfoPaciente(paciente){
    console.log("Nombre del paciente: "+paciente.nombre);
    console.log("Edad del paciente: ",paciente.edad);
    console.log("Citas registradas: ");

    //forEach para imprimir citas 
    paciente.citas.forEach((citas, indice)=>{
        console.log("Indice: "+indice+" Fecha: "+citas.fecha+" hora: "+citas.hora);
    })
}//Aqui termina mi funcion mostraInfoPaciente

//Funcion para generar tarjetas de pacientes
function generarTargetaPaciente(paciente){

    //crear
    let tarjetaDiv= document.createElement("div");//aqui creo un container para mi tarjeta
    tarjetaDiv.className="col";//aqui le especifico que es una columna

    //crear el contenido de la tarjeta
    tarjetaDiv.innerHTML=`
    <div class="card border-info mb-3">
        <div class="card-header">Paciente</div>
            <div class="card-body">
            <h5 class="card-title">${paciente.nombre}</h5>
            <p class="card-text">Aqui podriamos agregar una breve descripcion de nuestro paciente.</p>
            <p>Edad: ${paciente.edad}</p>
            
        </div>
    </div>
`

    //poner
    contenedorTarjetas.appendChild(tarjetaDiv);
    

}

//evento
botonRegistrarPaciente.addEventListener('click',registrarPaciente);