const fs = require('fs')

module.exports = {
  readFile
}

function readFile(filePath) {

  const data = fs.readFileSync(filePath, {
    encoding: 'utf8',
    flag: 'r'
  });

  return data
}
