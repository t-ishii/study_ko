const fs = require('fs')
const path = require('path')

const getEntryFiles = () => {
  const fileMap = {}
  const tsFiles = fs.readdirSync('./src').filter((file) => /\.ts$/.test(file))
  tsFiles.forEach(file => {
    fileMap[file] = path.resolve(__dirname, path.join('src', file))
  });
  return fileMap
}

module.exports = {
  mode: 'development',
  entry: getEntryFiles(),
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  }
}
