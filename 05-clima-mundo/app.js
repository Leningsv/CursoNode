const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dereccion  de la ciudad para obtener el cliente',
        demand: true
    }
}).argv;
let getInfo = async() => {
    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng)
        return `El clima en ${argv.direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima en ${argv.direccion}`;
    }

}
getInfo().then(result => {
    console.log(result);
}).catch(err => console.error(err));