const cervezas = ['Aguila','Club','Corona'];
if (cervezas.includes('Aguila')) console.log('si hay aguila')

const [,,c2] = cervezas; /// por posicion

console.log(c2);

///FUNCIONES
const retornarCervezas = ()=>{
    return ['ABC',123];
};

const [letas,numeros]= retornarCervezas();
console.log(letas);
console.log(numeros);


/// agregar elementos a un array usando spread operator
const x = [...cervezas,'Stella Artois'];
console.log(x);


