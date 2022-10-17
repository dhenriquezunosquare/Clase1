//Ejemplo
let v1 = 1;
let v2 = 2;
v1= v2; // valor
v1= 3;
console.log(v1);
console.log(v2);

let paciente = {
    nombre:'David',
    apellido:'Henriquez'
}

let persona = paciente;
persona.apellido = 'Turcios';

console.log(paciente);
console.log(persona);

/// javascript maneja 2 formas de asignacion 1 por valor( primimtivas), y la otra es por referencia (obj,arr)

const arr= ['1', '2', '3'];
const arr2= arr; // referencia

arr2.push('10');
console.log(arr);
console.log(arr2);

////////// tipos de valores

console.log(typeof paciente );
console.log(typeof arr );
console.log(typeof 5 );
console.log(typeof 'David');
console.log(typeof false);
////
console.log(typeof NaN);
console.log(typeof null);///excepcion

///javascritp tiene backward compatibility

/// CONST VS LET 
let v3 = 10;
const v4 = 20;  ////// SI TE DEJA MUTAR LOS DATOS, PERO NO TE DEJA REASIGNAR 
v3= 'xD';
// console.log(v3);
// console.log(v4);

let ciudad = {
    nombre:'Bogota',
    clima:'Frio'
};

const doctor ={
    especialida:'N',
    nombre:'Nombre'
};
 
// ciudad={};

ciudad.poblacion = 47;
doctor.edad = 26 ;

console.log(doctor);
console.log(ciudad);


/////// ARRAY
const carros = ['c1', 'c2', 'c3', 'c4'];
//carros=[];/// ERROR
carros[4]  ='c5'
console.log(carros);





