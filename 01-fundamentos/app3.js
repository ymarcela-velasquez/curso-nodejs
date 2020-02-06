console.log('Program start')

// setTimeout( function(){
//   console.log('First timeout')
// }, 3000 )

setTimeout(() => {
  console.log('First timeout')
}, 3000 )

setTimeout(() => {
  console.log('Second timeout')
}, 0 )

setTimeout(() => {
  console.log('Third timeout')
}, 0 )

console.log('Program finish')


