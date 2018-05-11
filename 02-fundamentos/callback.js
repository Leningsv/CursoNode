setTimeout(() => {
    console.log('Hola mundo');
}, 100);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Fernando',
        id
    }
    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la base de datos`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(20, (err, usuario) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Usuario de datos`, usuario);
    }
});

getUsuarioById(10, (err, usuario) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Usuario de datos`, usuario);
    }
});