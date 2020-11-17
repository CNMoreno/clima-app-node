const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    const appiKey = '94c8d906a9cf4a108b1354b43f22089b';
    const instance = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&APPID=${appiKey}`)


    const resp = await instance;

    if (resp.data === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}