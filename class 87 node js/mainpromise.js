import fs from "fs/promises"

let a = await fs.readFile("ravi.txt")

let b = await fs.appendFile("ravi.txt",  "\n\n\n\n this is amazing promise")

console.log(a.toString(), b)