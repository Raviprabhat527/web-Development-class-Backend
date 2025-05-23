const express = require('express')
const app = express()

const Employee = require("./models/Employee")

mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 4000

app.set('view engine', 'ejs');

const getRandom = (arr)=>{
  let rno = Math.floor(Math.random() * (arr.length - 1))
  return arr[rno]
}

app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' });

})

app.get('/generate', async(req, res) => {
    //clear the colletion Employee
    await Employee.deleteMany({})
    //Generate random data

    let randomNames = ["Ram", "Ramu", "Ramesh", "Rahul"]
    let randomLang = ["Python", "C++", "Java", "JavaScript"]
    let randomCities = ["Delhi", "Kolkata", "Patna", "Sitamarhi"]
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random * (25000)),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random()>0.5)?true:false
        })
       console.log(e)
    }
    res.render('index', {foo: 'FOO'});
  
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})