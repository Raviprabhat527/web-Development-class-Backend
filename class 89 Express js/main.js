const express = require('express')
 const blog = require('./routes/blog')
 const shop = require('./routes/shop')
  
 
 const app = express()     //npm init -y in the open file package.json                        
 const port = 5000         //npm i express@4 in the open file name package-lock.json and node_modules
 
 app.use(express.static("public"))
 app.use('/blog', blog)
 app.use('/shop', shop)
 
 app.get('/', (req, res) => {
     console.log("Hey its a get request")
     res.send('Hello World21!')
 }).post('/', (req, res) => {
     console.log("Hey its a post request")
     res.send('Hello World post!')
 })
 
 app.put('/', (req, res) => {
     console.log("Hey its a put request")
     res.send('Hello World put!')
 })
 
 app.get("/index", (req, res) => {
     console.log("Hey its index")
     res.sendFile('templates/index.html', { root: __dirname })
 })
 
 app.get("/api", (req, res) => {
     res.json({ a: 1, b: 2, c: 3, d: 4, name: ["Ravi", "Prabhat"] })
 })
 
 app.listen(port, () => {
     console.log(`Example app listening on port ${port}`)
 })