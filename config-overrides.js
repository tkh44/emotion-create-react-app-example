const babelLoader = function(conf) {
  if (!conf.loader) return false;
  return conf.loader.indexOf('babel-loader') > -1;
};

function rewireEmotion(config, env) {
  const babelrc = config.module.rules.find(babelLoader).options;
  babelrc.plugins = ['emotion/babel'].concat(babelrc.plugins || []);

  return config;
}

module.exports = rewireEmotion;

module.exports = function override(config, env) {
  config = rewireEmotion(config, env);
  return config;
};
