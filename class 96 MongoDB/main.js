// https://www.npmjs.com/package/mongoose
import mongoose from "mongoose";  //run in the program: npm run dev
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 4000

app.get('/', (req, res) => {
    const todo = new Todo({ title: "Hey first todo", desc: "Description of this todo",
         isDone: false, days: 3 })
         todo.save()
  res.send('Hello World!')
})

app.get('/', async(req, res) => {
    let todo = await Todo.findOne({})
    console.log(todo)
  res.json({title: todo.title, desc: todo.desc})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})