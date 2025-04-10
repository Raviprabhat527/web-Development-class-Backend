//npmjs.com-dotenv
const express = require('express')
require('dotenv').config()
console.log(process.env) 
const app = express()
const port = 3000

// console.log(process.env.PASSWORD)

app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})