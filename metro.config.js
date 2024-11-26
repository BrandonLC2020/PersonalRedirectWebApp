const { getDefaultConfig } = require('@react-native/metro-config');

module.exports = {
  ...getDefaultConfig(__dirname),
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx'], // Ensure .js files are included
  },
};
