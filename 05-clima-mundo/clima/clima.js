const axios = require('axios');
const getClima = async(lat, lng) => {
    let temp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=731f36b2e52b99dff0947234dde15ad9`)
    return temp.data.main.temp;
};

module.exports = {
    getClima
}