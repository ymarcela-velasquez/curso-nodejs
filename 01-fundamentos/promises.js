let employees = [{
  id: 1,
  name: 'Fernando'
}, {
  id: 2,
  name: 'Melissa'
}, {
  id: 3,
  name: 'Juan'
}]

let salaries = [{
  id: 1,
  salary: 1000
}, {
  id: 2,
  salary: 2000
}]

let getEmployee = (id) =>{
  return new Promise ((resolve, reject) => {
    let employeeDB = employees.find(employee => employee.id === id)
    if(!employeeDB){
      reject(`Ǹo existe el empleado con el Id ${ id }`)
    } else {
      resolve(employeeDB) 
    }
  })
}

let getSalary = (employee) => {
  return new Promise((resolve, reject) =>{
    let salaryDB= salaries.find(salary => salary.id === employee.id)
    if(!salaryDB){
      reject(`No se encontró un salario para el empleado ${ employee.name }`)
    } else{
      resolve({
        name: employee.name,
        salary: salaryDB.salary,
        id: employee.id
      })
    }
  })
}


getEmployee(3)
.then(employee => {
  getSalary(employee)
  .then(salary => {
    console.log(`El salario de ${ salary.name } es de ${ salary.salary }`)
  })
  .catch(err => console.log(err)) 
})
.catch(err => console.log(err))


//Equivalente
// getEmployee(1)
// .then(employee => {
//   getSalary(employee)
//   .then(salary => {
//     console.log(`El salario de ${ salary.name } es de ${ salary.salary }`)
//   }, err => console.log(err))
// }, err => console.log(err))

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});