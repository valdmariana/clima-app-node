const axios = require('axios');



const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4371be89d95ef7386200d5238d312796&units=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}
