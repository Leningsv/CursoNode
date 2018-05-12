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
let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(x => x.id === id);
        if (!empleadoDB) {
            reject('No existe el empleado en la base de datos');
        } else {
            resolve(empleadoDB);
        }
    });
};
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(x => x.id === empleado.id);
        if (!salarioDB) {
            reject('Ninguna respuesta encontrada');
        } else {
            resolve({ empleado: empleado.nombre, salario: salarioDB.salario });
        }
    });
}

getEmpleado(10).then((empleado) => {
    console.log('Emplado de base de datos', empleado);
}, (err) => console.log(err));

// Promesas en cadena
getEmpleado(1).then((empleado) => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`el salario de ${resp.empleado} es de ${resp.salario}`);
});

getEmpleado(5).then((empleado) => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`el salario de ${resp.empleado} es de ${resp.salario}`);
}).catch(err => {
    console.log(err);
});