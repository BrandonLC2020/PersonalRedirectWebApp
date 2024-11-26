module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],  // Path to the src directory
        alias: {
          '@components': './src/components',  // Alias for components
          '@navigation': './src/navigation',  // Alias for navigation
          '@screens': './src/screens',  // Alias for screens
          '@utils': './src/utils',    // Alias for utils
        },
      },
    ],
  ],
};
