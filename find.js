//What does find do?

//Returns ONE object
//It only returns the first thing that matches the condition

const data = require("./data")


//find student by id
const studentById1 = data.find(function(student) {
  if(student.id === 1){
    return true
  } else {
    false
  }
})

//console.log(studentById1)

//find student by id different notation
const studentById2 = data.find(function(student){
  return student.id === 2
})

//console.log(studentById2)

//find student by id different notation
const studentById3 = data.find(student => student.id === 3)
//console.log(studentById3)

//find student by name
const studentByName = data.find(student => student.firstName === "Luna" )
//console.log(studentByName)

//find student by house
const studentByHouse = data.find(student => student.house === "Ravenclaw")
//console.log(studentByHouse)