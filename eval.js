const brainfuck = require('brainfuck2000')
const path = require('path')

module.exports = {
  generateBrainfuckCommand
}

function generateBrainfuckCommand(num1, num2, module_path) {

  let numString = generateBfCellValueFromNumber(num1) + '>' + generateBfCellValueFromNumber(num2)
  let sumBfSource = readFile(module_path)
  let brainfuckCommand = numString + sumBfSource

  return brainfuckCommand
}

function generateBfCellValueFromNumber(num) {

  let numString = ''

  while (num > 0) {
    numString += '+'
    num--
  }
  return numString
}

function readFile(filePath) {

  const data = fs.readFileSync(filePath, {
    encoding: 'utf8',
    flag: 'r'
  });

  return data
}
