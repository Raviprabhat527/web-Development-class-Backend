"use server"
import fs from "fs/promises"
export const submitAction = async(e) => {
    console.log(e.get("name"), e.get("add"))
    let a = await fs.writeFile("ravi.text", `Name is ${e.get("name")} and Adress is ${e.get("add")}`)
  }