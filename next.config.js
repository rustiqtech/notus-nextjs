const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const webpack = require('webpack');
const path = require('path');

module.exports = withFonts(
  withImages({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
        },
      });
      config.resolve.modules.push(path.resolve('./'));
      return config;
    },
  })
);
