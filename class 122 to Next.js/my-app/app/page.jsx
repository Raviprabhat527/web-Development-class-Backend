//import { useState, useEffect } from "react";
import fs from "fs/promises"
import Navbar from "@/components/Navbar"

export default function Home() {
  //const [count, setCount] = useState(0)
  console.log("Hey I am Ravi")
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
     <div>
      <Navbar/>
      I am a Component 
      {/* {count}
      <button onClick={() => setCount(count + 1)}>Click me</button> */}
     </div>
  );
}
