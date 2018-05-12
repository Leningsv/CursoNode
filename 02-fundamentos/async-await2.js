let empleados = [{
    id: 1,
    nombre: 'Lenin'
}, {
    id: 2,
    nombre: 'Juan'
}, {
    id: 3,
    nombre: 'Meliza'
}];
let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(x => x.id === id);
    if (!empleadoDB) {
        throw new Error('No existe el empleado en la base de datos');
    } else {
        return empleadoDB;
    }
};
let getSalario = async(empleado) => {
    let salarioDB = salarios.find(x => x.id === empleado.id);
    if (!salarioDB) {
        throw new Error('Ninguna respuesta encontrada');
    } else {
        return { empleado: empleado.nombre, salario: salarioDB.salario };
    }
}
let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${resp.empleado} tiene un salarion de ${resp.salario}$`;
}

getInformacion(2).then(result => {
    console.log(result);
});
getInformacion(3).then(result => {
    console.log(result);
}).catch(err => console.log(err));