const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config,
  );
  config = rewireLess(config, env);
  return config;
  // config = rewireLess.withLoaderOptions({
  //   modifyVars: {
  //     '@primary-color': '#1890FF',
  //     '@font-family': 'Montserrat',
  //   },
  // })(config, env);
  // return config;
};
