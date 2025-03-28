/*  //const { createServer } = require('node:http');
//const fs = require("fs")
import http from "http"

const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<h1> Hello World</h1>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});  */ 

/* import {a, d, e} from "./mymodules.js"
console.log(a)
console.log(d, e) */

import obj from "./mymodules.js"
console.log(obj)