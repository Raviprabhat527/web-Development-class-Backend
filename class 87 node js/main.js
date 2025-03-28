const { error } = require("console")
const fs = require("fs")
//const fs = require("fs/promises")

// console.log(fs)

console.log("starting")
// fs.writeFileSync("ravi.txt", "Ravi is a good boy")

fs.writeFile("ravi2.txt", "Ravi is a good boy in web Developer", ()=>{
    console.log("done")
    fs.readFile("ravi2.txt", (error, data)=>{
       // console.log(error,data)
       console.log(error,data.toString())
    })

    fs.appendFile("ravi.txt", "ravi in development", (e, d)=>{
        console.log(d)
    })
})
console.log("ending")