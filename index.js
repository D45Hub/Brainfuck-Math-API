const http = require('http');
const brainfuck = require('brainfuck2000')
const path = require('path')
const url = require('url')

const port = process.env.PORT || 3000

const eval = require('./src/js/eval.js')
const fileReader = require('./src/js/fileReader.js')

const bfFolderPath = __dirname + "/src/bf/"

const SUM_MODULE_PATH = path.resolve(bfFolderPath, 'sum.b')
const SUBTRACT_MODULE_PATH = path.resolve(bfFolderPath, 'subtract.b')
const OUTPUT_MODULE_PATH = path.resolve(bfFolderPath, 'resultJson.b')
const outputCode = fileReader.readFile(OUTPUT_MODULE_PATH)

const server = http.createServer((req, res) => {

  if (req.method !== 'GET') {
    res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
  } else {

    let urlParts = url.parse(req.url)
    let urlPathname = urlParts.pathname

    if (urlPathname === "/sum") {

      let r = handleSumRequest(req)
      res.end(handleBrainfuckCommand(outputCode).replace('#', r))
    } else if (urlPathname === "/subtract") {

      let r = handleSubtractRequest(req)
      res.end(handleBrainfuckCommand(outputCode).replace('#', r))
    }
  }
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})

function handleSumRequest(req) {
  return handleGenericRequest(req, "/sum?num1", "num2", SUM_MODULE_PATH)
}

function handleSubtractRequest(req) {
  return handleGenericRequest(req, "/subtract?num1", "num2", SUBTRACT_MODULE_PATH)
}

function handleGenericRequest(req, url_param1, url_param2, module_path) {

  let params = new URLSearchParams(req.url)
  let num1 = parseInt(params.get(url_param1))
  let num2 = parseInt(params.get(url_param2))

  let brainfuckCommand = eval.generateBrainfuckCommand(num1, num2, module_path)
  return handleBrainfuckCommand(brainfuckCommand, req).charCodeAt(0)
}

function handleBrainfuckCommand(brainfuckCommand, req) {
  const program = brainfuck(brainfuckCommand)
  program.run(req)

  return program.resultString()
}
