const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = ({ env } = { env: 'dev' }) => {
  const envConfig = require(`./webpack.${env}`);
  const config = merge(common, envConfig);

  return config;
};
