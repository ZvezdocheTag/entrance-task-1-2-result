const PUBLIC_PATH = require('path').join(__dirname, 'public');
const path = require('path');
const { initBackendStub } = require('./utils/backend-stub');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    // chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    port: 9000,
    before: initBackendStub
  }
};
