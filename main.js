const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')



const app = express()
const port = 5000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("Hey its a get request")
  res.send('Hello World1111!')
}).post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello world post!')
  })

  app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello world put!')
  })
  
  app.get("/about", (req, res) => {  //localhost:500/api run in the google
    console.log("Hey its about")
   // res.send('Hello world about!') 
   res.sendFile('templates/about.html', {root: __dirname}) 
})

  app.get("/api", (req, res)=>{
    res.json({a:1, b:2, c:3, d:4, name: ["Ravi", "Prabhat"]}) // localhost:500/api run in the google
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})