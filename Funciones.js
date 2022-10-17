//// EJEMPLO FUNCIONES DE FLECHA
const comer = (alimento = 'pizza') => {
    return `comer ${alimento}`;
}

console.log(comer());


const traerNombre = (nombre = 'David') => `Mi Nombre es ${nombre}`;
console.log(traerNombre());


//// EJMPLO 2
const getUsuario = () => {
    const user = { username: 'David', password: '123' };
    const profile = { rol: 'admin', password: '123', email: 'dev@gmail.com' };
    return {
        user,
        profile
    }
};

console.log(getUsuario());



/// MEJORAR FORMA DE VALIDAR 
const guardar = () => {
    const codigo = '1';
    if (!existePaciente(codigo)) return alert('No existePaciente');
    if (!isActive(codigo)) return alert('No esta activo');
    ///PROCESO DE GUARDAR
}