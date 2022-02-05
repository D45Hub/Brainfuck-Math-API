const brainfuck = require('brainfuck2000')
const path = require('path')

const eval = require('./src/js/eval.js')
const fileReader = require('./src/js/fileReader.js')

const SUM_MODULE_PATH = path.resolve(__dirname + "/src/bf/", 'sum.b')
const SUBTRACT_MODULE_PATH = path.resolve(__dirname + "/src/bf/", 'subtract.b')
const OUTPUT_MODULE_PATH = path.resolve(__dirname + "/src/bf/", 'resultJson.b')
const EQUALS_MODULE = path.resolve(__dirname + "/src/test/", 'equals.b')

const MODULE_45_PATH = path.resolve(__dirname + "/src/test/expected_results/", '45.b')
const MODULE_42_PATH = path.resolve(__dirname + "/src/test/expected_results/", '42.b')
const ADDITION_MODULE_MESSAGE_PATH = path.resolve(__dirname + "/src/test/expected_results/", 'additionModuleMessage.b')

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
  const program3 = brainfuck(testCommand2)

  program1.run()
  program3.run()

  let testHeaderMessageCommand = fileReader.readFile(ADDITION_MODULE_MESSAGE_PATH)
  const program2 = brainfuck(testHeaderMessageCommand)
  program2.run()

  console.log(program2.resultString())
  console.log(program1.resultString().slice(1))
  console.log(program3.resultString().slice(1))
}
