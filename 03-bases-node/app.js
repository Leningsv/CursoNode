const colors = require('colors');
//Path relativo
const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let command = argv._[0];
switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        let informacion = async() => {
            let result = await crearArchivo(argv.base, argv.limite);
            return result;
        };
        informacion().then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando no reconocido');
};
// const express = require('express');
// const archivosPropios = require('./archivosPropios');
console.log(argv);