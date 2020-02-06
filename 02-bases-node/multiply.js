const fs = require('fs')

module.exports.multiply = async(base) =>{
  data = ''
  for(let i = 1; i <= 10; i++ ){
    data += (`${ base } * ${ i } = ${base * i}\n`)
  }
  fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!')
  })
  return data
}


