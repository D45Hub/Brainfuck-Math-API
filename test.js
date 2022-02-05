const brainfuck = require('brainfuck2000')
const path = require('path')

const eval = require('./src/js/eval.js')
const fileReader = require('./src/js/fileReader.js')

const bfFolderPath = __dirname + "/src/bf/"
const expectedResultsPath = __dirname + "/src/test/expected_results/"

const SUM_MODULE_PATH = path.resolve(bfFolderPath, 'sum.b')
const SUBTRACT_MODULE_PATH = path.resolve(bfFolderPath, 'subtract.b')
const OUTPUT_MODULE_PATH = path.resolve(bfFolderPath, 'resultJson.b')
const EQUALS_MODULE = path.resolve(__dirname + "/src/test/", 'equals.b')

const MODULE_45_PATH = path.resolve(expectedResultsPath, '45.b')
const MODULE_42_PATH = path.resolve(expectedResultsPath, '42.b')
const ADDITION_MODULE_MESSAGE_PATH = path.resolve(expectedResultsPath, 'additionModuleMessage.b')

const testValue1 = 15
const testValue2 = 30
const testValue3 = 12

testAddition()

function testAddition() {

  let additionCommand1 = eval.generateBrainfuckCommand(testValue1, testValue2, SUM_MODULE_PATH)
  let additionCommand2 = eval.generateBrainfuckCommand(testValue2, testValue3, SUM_MODULE_PATH)
  let testedValueCommand1 = fileReader.readFile(MODULE_45_PATH)
  let testedValueCommand2 = fileReader.readFile(MODULE_42_PATH)

  let equalsModule = fileReader.readFile(EQUALS_MODULE)

  let testCommand1 = additionCommand1 + testedValueCommand1 + equalsModule
  let testCommand2 = additionCommand2 + testedValueCommand2 + equalsModule

  const program1 = brainfuck(testCommand1)
  const program2 = brainfuck(testCommand2)

  program1.run()
  program2.run()

  let testHeaderMessageCommand = fileReader.readFile(ADDITION_MODULE_MESSAGE_PATH)
  const program3 = brainfuck(testHeaderMessageCommand)
  program3.run()

  console.log(program3.resultString())
  console.log(program1.resultString().slice(1))
  console.log(program2.resultString().slice(1))
}
