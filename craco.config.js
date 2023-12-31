// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        alias: {
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@store': path.resolve(__dirname, 'src/store'),
          '@services': path.resolve(__dirname, 'src/services'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    },
  },
};
