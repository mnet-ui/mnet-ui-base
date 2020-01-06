const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.stories\.js$|(\/|\\)stories(\/|\\).*\.js$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          prettierConfig: {
            parser: 'babel',
          },
        },
      },
    ],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /stories(\\|\/).*\.(ts|tsx)$/,
    loaders: [
      {
        loader: require.resolve('ts-loader'),
      },
      {
        loader: require.resolve('@storybook/source-loader'),
      },
    ],
  });

  // eslint-disable-next-line no-param-reassign
  config.resolve.alias['mnet-ui-base'] = path.resolve(__dirname, '../src/js');

  return config;
};
