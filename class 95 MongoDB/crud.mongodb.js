//CRUD Operation
use("CrudDb")

db.createCollection("courses")

db.courses.insertOne({
    name:"Ravi Web Development",
    price: 50000,
    assignments: 15,
    project: 50

})

db.courses.insertMany([
      {
        "name": "Ravi Web Development",
        "price": 50000,
        "assignments": 15,
        "project": 50
      },
      {
        "name": "Java Programming",
        "price": 45000,
        "assignments": 12,
        "project": 40
      },
      {
        "name": "Python for Data Science",
        "price": 48000,
        "assignments": 10,
        "project": 45
      },
      {
        "name": "Introduction to Machine Learning",
        "price": 55000,
        "assignments": 20,
        "project": 55
      },
      {
        "name": "Web Development Bootcamp",
        "price": 52000,
        "assignments": 18,
        "project": 60
      },
      {
        "name": "Full Stack Development",
        "price": 60000,
        "assignments": 25,
        "project": 70
      },
      {
        "name": "Android Development",
        "price": 47000,
        "assignments": 14,
        "project": 35
      },
      {
        "name": "Data Structures and Algorithms",
        "price": 43000,
        "assignments": 16,
        "project": 50
      },
      {
        "name": "C++ for Beginners",
        "price": 40000,
        "assignments": 13,
        "project": 30
      },
      {
        "name": "Advanced JavaScript",
        "price": 49000,
        "assignments": 17,
        "project": 65
      }
    ]
  )

//READ  
let a = db.courses.find({price: 50000})
  //console.log(a.count())
  console.log(a.toArray()) 

let b = db.courses.findOne({price: 50000})
console.log(b)

// UPDATE
db.courses.updateOne({price: 50000}, {$set:{price: 80000}})

db.courses.updateMany({price: 50000}, {$set:{price: 120000}})


// DELETE

db.courses.deleteOne({price: 80000})