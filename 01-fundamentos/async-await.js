// let getName = () =>{
//   return new Promise((resolve, reject){
//     resolve('Fernando')
//   })
// }


// El async equivale a la declaración de la promesa
let getName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('Fernando')
    }, 3000 )
    
  })
}

let saludo = async() =>{
  let name = await getName()
  return `Hola ${ name }`
}

saludo().then(message => console.log(message))

