const place = require("./place/place")
const weather = require("./weather/weather")

const argv = require("yargs").options({
  address: {
    alias: "d",
    description: "City address to get the weather",
    demand: true
  }
}).argv;

// place.getPlaceLatLong(argv.address)
//   .then(response => console.log(response))

// weather.getWeather(35, 139) 
//   .then(console.log)
//   .catch(console.log)

const getInfo = async(address) => {
  try {
    const coord = await place.getPlaceLatLong(address)
    const temp = await weather.getWeather(coord.latitude, coord.longitude)
    return `El clima de ${ address } es de ${ temp }`

  } catch (err ) {
      return `No se pudo encontrar el clima para ${ address }`
  }
}

getInfo(argv.address)
  .then(console.log)
  .catch(console.log)