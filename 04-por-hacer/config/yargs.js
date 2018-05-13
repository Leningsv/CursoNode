const descripcion = {
    demand: true,
    default: 'crear',
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completdao o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'crea un nuevo registro', {
        descripcion
    })
    .command('actualizar', 'actualiza un registro', {
        descripcion,
        completado
    })
    .command('borrar', 'borra un registro', {
        descripcion
    })
    .help().argv;

module.exports = {
    argv
};