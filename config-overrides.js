const { injectBabelPlugin } = require('react-app-rewired');

function rewireEmotion(config, env) {
  return injectBabelPlugin('emotion/babel', config);
}

module.exports = rewireEmotion;

module.exports = function override(config, env) {
  config = rewireEmotion(config, env);
  return config;
};
