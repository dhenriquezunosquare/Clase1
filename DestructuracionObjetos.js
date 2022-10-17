const paciente = {
    nombre:'David',
    apellido:'Henriquez',
    cedula:'1140'
}

const nombre = 'Andres';
const {nombre:nombrePaciente,apellido} = paciente;

// console.log(nombrePaciente,apellido);


//// SPREAD OPERATORS
const {cedula, ...resto} = paciente;
// console.log(cedula);
// console.log(resto);

const getPaciente = ({nombre,apellido}) =>{
    console.log(nombre,apellido);
}
getPaciente(paciente);


//// ASIGNARLE UN JSON A OTRO ;
const persona = {...paciente};
persona.apellido='Turcios';
console.log(paciente);
console.log(persona);





