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

let getEmployee = (id, callback) =>{
  let employeeDB = employees.find(employee => {
    return employee.id === id
  })
  if(!employeeDB){
    callback(`Ǹo existe el empleado con el Id ${ id }`)
  } else {
    callback(null, employeeDB) //null porque no hay ningún error y se envía el empleado
  }
}

//Equivalente
// let employeeDB = employees.find(employee => employee.id === id )

getSalary = (employee, callback) => {
  let salaryDB= salaries.find(salary => salary.id === employee.id)
  if(!salaryDB){
    callback(`No se encontró un salario para el empleado ${ employee.name }`)
  } else{
    callback(null, {
      name: employee.name,
      salary: salaryDB.salary,
      id: employee.id
    })
  }
}

getEmployee(5, (err, employee)=> {
  if(err){
    return console.log(err);
  }
  getSalary(employee, (err, response ) => {
    if(err){
      return console.log(err);
    }
    console.log(`El salario de ${ response.name } es de ${ response.salary }`);
    

  })
})


