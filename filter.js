//What does filter do?

//It returns everything that matches the condition
//Returns an array

const data = require("./data")

//filter by house
const filterByHouse = data.filter(students => students.house === "Ravenclaw")
//console.log(filterByHouse)

//filter by id
const filterbyId = data.filter(student => student.id === 1)
//console.log(filterbyId)

//filter by id > 5
const filterByIdMore = data.filter(students => students.id > 5)
//console.log(filterByIdMore)

//filter by plays Quidditch
const filterPlaysQuidditch = data.filter(students => students.playsQuidditch)
//console.log(filterPlaysQuidditch)

//filter by plays Quidditch and gender === "m"
const filterByPlaysQuidditchAndMale = data.filter(students => students.gender === "m" && students.playsQuidditch)
//console.log(filterByPlaysQuidditchAndMale)
