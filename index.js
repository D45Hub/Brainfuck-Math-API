const http = require('http');
const brainfuck = require('brainfuck2000')
const fs = require('fs')
const path = require('path')
const url = require('url')

const port = process.env.PORT || 3000

const eval = require('./src/js/eval.js')
const fileReader = require('./src/js/fileReader.js')

const SUM_MODULE_PATH = path.resolve(__dirname + "/src/bf/", 'sum.b')
const SUBTRACT_MODULE_PATH = path.resolve(__dirname + "/src/bf/", 'subtract.b')
const OUTPUT_MODULE_PATH = path.resolve(__dirname + "/src/bf/", 'resultJson.b')


const server = http.createServer((req, res) => {

  if (req.method !== 'GET') {
    res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
  } else {

    let urlParts = url.parse(req.url)
    let urlPathname = urlParts.pathname

    if (urlPathname === "/sum") {

      let r = handleSumRequest(req)
      let outputCode = fileReader.readFile(OUTPUT_MODULE_PATH)

      const program = brainfuck(outputCode)
      program.run(req)

      res.end(program.resultString().replace('#', r))
    } else if (urlPathname === "/subtract") {

      let r = handleSubtractRequest(req)
      let outputCode = fileReader.readFile(OUTPUT_MODULE_PATH)

      const program = brainfuck(outputCode)
      program.run(req)

      res.end(program.resultString().replace('#', r))
    }
  }
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})

function handleSumRequest(req) {

  let params = new URLSearchParams(req.url)
  let num1 = parseInt(params.get("/sum?num1"))
  let num2 = parseInt(params.get("num2"))

  let brainfuckCommand = eval.generateBrainfuckCommand(num1, num2, SUM_MODULE_PATH)
  const program = brainfuck(brainfuckCommand)
  program.run(req)
  return program.resultString().charCodeAt(0)
}



function handleSubtractRequest(req) {

  let params = new URLSearchParams(req.url)
  let num1 = parseInt(params.get("/subtract?num1"))
  let num2 = parseInt(params.get("num2"))

  let brainfuckCommand = eval.generateBrainfuckCommand(num1, num2, SUBTRACT_MODULE_PATH)
  const program = brainfuck(brainfuckCommand)
  program.run(req)

  return program.resultString().charCodeAt(0)
}
