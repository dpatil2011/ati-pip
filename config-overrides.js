const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
// const rewireLess = require('react-app-rewire-less-modules');

module.exports = function override(config, env) {
  config = rewireLess(config, env);
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config,
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: { 
      "@primary-color": "#2CA29A",
      "@link-color": "rgba(0, 0, 0, .65)",
      "@font-size-base": "14px",
      "@text-color": "#000000",
      "@table-header-bg":"#000",
      "@heading-color":"#fff",
      "@layout-body-background":"#FAF9FE",
    },
    javascriptEnabled: true,
  })(config, env);
  return config;
};