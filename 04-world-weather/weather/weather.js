const axios = require('axios')

module.exports.getWeather = async(latitude, longitude) =>{
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=fdd09fe9794de34fd1f7be161f3a0c6a&units=metric`)
  return response.data.main.temp
}