const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Customize Webpack for React Native Web and TypeScript
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    'react-native$': 'react-native-web',
    '@env': 'react-native-dotenv', // Alias for environment variables
  };

  // Support for .env files
  config.plugins.push(
    new require('dotenv-webpack')({
      path: '.env',
      safe: false,
      allowEmptyValues: true,
    })
  );

  // Add support for TypeScript files
  config.resolve.extensions = [
    ...config.resolve.extensions,
    '.web.ts',
    '.web.tsx',
    '.ts',
    '.tsx',
  ];

  // Additional rules for TypeScript
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  });

  return config;
};
