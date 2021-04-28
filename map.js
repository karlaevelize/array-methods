//What does map do?
//It returns an array, the same size as the original one
//New array, same size, new data

const data = require("./data")

//array of first name
const arrayFirstName = data.map(students => students.firstName)
//console.log(arrayFirstName)

//array of full names
const arrayFullNames = data.map(students => `${students.firstName} ${students.lastName}`)
//console.log(arrayFullNames)

//another array of full names
const anotherFullName = data.map(students => students.firstName + " " + students.lastName)
//console.log(anotherFullName)