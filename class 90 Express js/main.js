const express = require('express')   //server start/run in the program:-nodemon main.js
const app = express()               //package.json in the file open:-npm init -y 
const port = 7000                  //package-lock.json/node_modules in the file open:-npm i express@4
const blog = require('./routes/blog')
const fs = require("fs")


//app.use(express.static("public")) 

app.use('/blog', blog)

//Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.ravi="I am Ravi Prabhat";
    console.log('LOGGED 1')
    fs.appendFileSync("logs.txt", `${Date.now() } is a ${req.method}\t`)
    console.log(`${Date.now() } is a ${req.method}`)
  // res.send("Hacked by Middleware 1")
    next()
  })
  
//Middleware2
app.use((req, res, next) => {
    console.log('LOGGED 2')
    next()
  })
  
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {   //run in the program:- http://localhost:7000/about
    res.send('Hello about!' + req.ravi)
  })

  app.get('/contact', (req, res) => {
    res.send('Hello contact!')    //run in the program:- http://localhost:7000/contact
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})