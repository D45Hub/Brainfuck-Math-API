const http = require('http');
const brainfuck = require('brainfuck2000')
const fs = require('fs')
const path = require('path')

const port = process.env.PORT || 3000

const SUM_MODULE_PATH = path.resolve(__dirname, 'sum.b')
const OUTPUT_MODULE_PATH = path.resolve(__dirname, 'resultJson.b')

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
  } else {

    if (req.url.includes("/sum")) {

      let r = handleSumRequest(req)
      let outputCode = readFile(OUTPUT_MODULE_PATH)

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

  let numString = ''

  while (num1 > 0) {
    numString += '+'
    num1--
  }

  numString += '>'

  while (num2 > 0) {
    numString += '+'
    num2--
  }

  let sumBfSource = readFile(SUM_MODULE_PATH)

  let brainfuckCommand = numString + sumBfSource
  const program = brainfuck(brainfuckCommand)
  program.run(req)
  return program.resultString().charCodeAt(0)
}

function readFile(filePath) {
  const data = fs.readFileSync(filePath, {
    encoding: 'utf8',
    flag: 'r'
  });

  return data
}
