const { multiply } = require('./multiply')

base = 5

multiply(base)
.then(product => console.log(product))
.catch(e => console.log(e))

