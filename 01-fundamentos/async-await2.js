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

let getEmployee = async(id) =>{
  let employeeDB = employees.find(employee => employee.id === id)
  if(!employeeDB){
    throw new Error(`Ǹo existe el empleado con el Id ${ id }`);
  } else {
    return employeeDB
  }
}

let getSalary = async (employee) => {
  let salaryDB= salaries.find(salary => salary.id === employee.id)
  if(!salaryDB){
    throw new Error(`No se encontró un salario para el empleado ${ employee.name }`);
  } else{
    return {
      name: employee.name,
      salary: salaryDB.salary,
      id: employee.id
    }
  }
}

let getInformation = async (id) =>{
  let employee = await getEmployee(id)
  let result = await getSalary(employee)
  return `${ result.name } tiene un salario de ${ result.salary }`
  
}

getInformation(3)
.then(message => console.log(message))
.catch(err => console.log(err))


//Otra forma
// getEmployee(3)
// .then(employee => {
//   getSalary(employee)
//   .then(salary => {
//     console.log(`El salario de ${ salary.name } es de ${ salary.salary }`)
//   })
//   .catch(err => console.log(err)) 
// })
// .catch(err => console.log(err))

// Detecta promesas sin resolver
// process.on('unhandledRejection', (reason, p) => {
//   console.log('Unhandled Rejection at:', p, 'reason:', reason);
//   // application specific logging, throwing an error, or other logic here
// });