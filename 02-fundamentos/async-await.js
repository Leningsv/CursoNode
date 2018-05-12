let getNombreAsync = async() => {
    //throw new Error('No existe un nombre para ese usuario');
    return 'Lenin';
};
console.log(getNombreAsync());
let getNombrePromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('lenin');
        }, 2000);
    });
};
console.log(getNombrePromesa());
getNombrePromesa().then(nombre => {
    console.log(nombre);
});
getNombreAsync().then(nombre => {
    console.log(nombre);
}).catch(err => {
    console.log('Error de ASYNC');
});

let saludo = async() => {
    let nombre = await getNombreAsync();
    return `Hola await ${nombre}`;
}
saludo().then(mensaje => {
    console.log(mensaje);
});