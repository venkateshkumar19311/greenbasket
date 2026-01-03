// config-overrides.js
// This file allows you to customize webpack configuration without ejecting
// To use this, you need to install: npm install --save-dev react-app-rewired
// Then change package.json scripts to use "react-app-rewired" instead of "react-scripts"

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = function override(config, env) {
  // Add BundleAnalyzerPlugin when ANALYZE env variable is set
  if (process.env.ANALYZE === 'true') {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: 'localhost',
        analyzerPort: 8888,
        openAnalyzer: true,
        generateStatsFile: false,
        statsOptions: { source: false }
      })
    );
  }

  return config;
};

