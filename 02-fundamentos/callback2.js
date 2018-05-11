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

let getEmpleado = (id, callbackEmpleado) => {
    let empleadoDB = empleados.find(x => x.id === id);
    if (!empleadoDB) {
        callbackEmpleado(`No existe un empleado con el ID ${id}`);
    } else {
        callbackEmpleado(null, empleadoDB);
        callbackEmpleado(null, empleadoDB);
    }
};

let getSalario = (empleado, callbackSalario) => {
    let salario = salarios.find(x => x.id === empleado.id);
    if (!salario) {
        callbackSalario(`No existe un salario para el empleado ${empleado.nombre}`);
    } else {
        callbackSalario(null, { nombre: empleado.nombre, salario: salario.salario });
    }
};

getEmpleado(1, (err, empleado) => {
    if (err) {
        console.log(err);
    } else {
        console.log(empleado);
        getSalario(empleado, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`El salario es =`, result);
            }
        });
    }
});
getEmpleado(10, (err, empleado) => {
    if (err) {
        console.log(err);
    } else {
        console.log(empleado);
    }
});

getSalario({
    id: 1,
    nombre: 'Lenin'
}, (err, result) => {
    console.log(result);
});