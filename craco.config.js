const theme = require('./src/styles/Theme/MescFit.js');
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            globalVars: theme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
