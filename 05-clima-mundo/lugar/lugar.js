const axios = require('axios');
const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAPLqmQ-_emscMIh1GRxTEbq_ER_CejA5c`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No existen resultados para la ciudad ${direccion}`);
    }
    let location = resp.data.results[0];
    let coors = location.geometry.location;
    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    };
}

module.exports = {
    getLugarLatLng
};