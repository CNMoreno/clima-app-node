const lugar = require('./lugar/lugar');
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const argv = require('./config/yargs').argv




const getInfo = async(direccion) => {

    try {
        const lugar = await getLugarLatLng(direccion);
        const clima = await getClima(lugar.lat, lugar.lng);
        return `El clima de ${lugar.direccion} es de ${clima.temperatura} y la humedad es de ${clima.humedad}`
    } catch (error) {
        return (`No se pudo determinar la temperatura de ${direccion}`)
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)