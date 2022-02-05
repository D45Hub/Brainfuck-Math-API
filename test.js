const brainfuck = require('brainfuck2000')
const path = require('path')

const eval = require('./src/js/eval.js')
const fileReader = require('./src/js/fileReader.js')

const SUM_MODULE_PATH = path.resolve(__dirname + "/src/bf/", 'sum.b')
const SUBTRACT_MODULE_PATH = path.resolve(__dirname + "/src/bf/", 'subtract.b')
const OUTPUT_MODULE_PATH = path.resolve(__dirname + "/src/bf/", 'resultJson.b')
const EQUALS_MODULE = path.resolve(__dirname + "/src/test/", 'equals.b')

const MODULE_45_PATH = path.resolve(__dirname + "/src/test/expected_results/", '45.b')
const ADDITION_MODULE_MESSAGE_PATH = path.resolve(__dirname + "/src/test/expected_results/", 'additionModuleMessage.b')

const testValue1 = 15
const testValue2 = 30


testAddition()

function testAddition() {

  let additionCommand = eval.generateBrainfuckCommand(testValue1, testValue2, SUM_MODULE_PATH)
  let testedValueCommand = fileReader.readFile(MODULE_45_PATH)
  let equalsModule = fileReader.readFile(EQUALS_MODULE)

  let testCommand = additionCommand + testedValueCommand + equalsModule
  const program1 = brainfuck(testCommand)

  program1.run()

  let testHeaderMessageCommand = fileReader.readFile(ADDITION_MODULE_MESSAGE_PATH)
  const program2 = brainfuck(testHeaderMessageCommand)
  program2.run()

  console.log(program2.resultString())
  console.log(program1.resultString().slice(1))
}
