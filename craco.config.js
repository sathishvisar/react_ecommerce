// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        alias: {
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@redux': path.resolve(__dirname, 'src/redux'),
          '@services': path.resolve(__dirname, 'src/services'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    },
  },
};
