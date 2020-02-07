const axios = require('axios')

module.exports.getPlaceLatLong = async (dir) =>{

  const encoderUrl = encodeURI(dir)
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encoderUrl }`,
    timeout: 1000,
    headers: {'x-rapidapi-key': 'e9437c13femsh242b093b28d3b8fp1be2bfjsn6964a75495b5'}
  })

  const response = await instance.get()
  if (response.data.Results.length === 0 ) {
    throw new Error(`No hay resultados para ${ dir }`)
  }
  const data = response.data.Results[0]
  var address = data.name
  const latitude = data.lat
  const longitude = data.lon

  return {
    address,
    latitude,
    longitude
  }
}


