const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado()
        for (const tarea of listado) {
            console.log('=========Por hacer======='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('========================='.green);
        }
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Actualizar una tarea por hacer', actualizar);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        break;
}