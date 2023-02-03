const path = require('path');
const { paths } = require('./paths');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.ts'),
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'personalize.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: paths
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss/i,
        exclude: /node_modules/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  performance: {
    // bundle size limits for warnings.
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};
