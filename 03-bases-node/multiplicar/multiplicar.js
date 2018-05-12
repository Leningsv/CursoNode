// requireds
const fs = require('fs');
const colors = require('colors');
crearArchivo = (base, limit) => {
    console.log('base', base, limit);
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        for (let i = 0; i <= limit; i++) {
            data += `${base} x ${i} = ${base*i}` + '\n';
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject();
            } else {
                resolve(`El archivo tabla-${base} a sido creado`)
            }
        });
    });
}
listarTabla = (base, limite) => {
    console.log('------------------');
    console.log('----Tabla de------');
    for (let i = 0; i < limite; i++) {
        console.log(`${i} x ${base} = ${i*base}`.red);
    }
};
module.exports = {
    crearArchivo,
    listarTabla
}