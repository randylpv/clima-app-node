const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&APPID=560a91597725aeaab5bdbf5af5477835`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}