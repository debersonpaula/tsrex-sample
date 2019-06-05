'use strict';
module.exports = {
  source: 'src',
  outputPath: 'dist',
  port: 8080,
  host: 'localhost',
  nodeEnv: {
  },
  htmlEnv: {
  },
  reactHotLoader: true,
  jest: {
    coverageThreshold: {
      global: {
        branches: 50,
        functions: 50,
        lines: 50,
      },
    },
    updateSnapshot: true,
  },
};
