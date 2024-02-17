const path = require('path');

module.exports = {
  mode: 'production',
  entry: ['./background.js'],
  output: {
    filename: 'background_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
