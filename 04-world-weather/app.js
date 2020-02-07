const place = require("./place/place");

const argv = require("yargs").options({
  address: {
    alias: "d",
    description: "City address to get the weather",
    demand: true
  }
}).argv;

place.getPlaceLatLong(argv.saddress)
  .then(response => console.log(response))
