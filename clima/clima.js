const axios = require('axios');


const getClima = async(lat, lon) => {
    const appiKey = '94c8d906a9cf4a108b1354b43f22089b'
    const unidadMedida = 'metric'

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appiKey}&units=${unidadMedida}`)

    const temperatura = resp.data.main.temp
    const humedad = resp.data.main.humidity


    return {
        temperatura,
        humedad
    }
}

module.exports = {
    getClima
}