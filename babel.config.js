module.exports = {
    presets: [
      'module:metro-react-native-babel-preset', // Default React Native preset
      '@babel/preset-typescript' // TypeScript support
    ],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env', // Path to your environment file
          safe: false,
          allowUndefined: true
        }
      ],
      '@babel/plugin-proposal-export-namespace-from', // Optional plugin for clean exports
      '@babel/plugin-proposal-class-properties' // Support for class properties
    ]
  };
  