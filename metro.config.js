const path = require('path');

module.exports = {
  mode: 'development',  // Set to 'production' for production builds
  entry: './App.tsx',  // Entry point for your React app (adjust the path if needed)
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],  // Add support for TypeScript and JavaScript
    alias: {
      // Redirect React Native imports to React Native Web equivalents
      'react-native$': 'react-native-web',
      'react-native-web/dist/exports/LogBox': 'react-native-web/dist/exports/LogBox',
      '@components': path.resolve(__dirname, 'src/components'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@navigation': path.resolve(__dirname, 'src/navigation'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,  // Include JS and TS files for Babel transpiling
        exclude: /node_modules/,  // Exclude node_modules
        use: {
          loader: 'babel-loader',  // Use Babel to transpile your JS/TS code
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],  // Babel presets for React and TypeScript
            plugins: [
              'react-native-web',  // Enable React Native Web support
              'babel-plugin-module-resolver',  // Use path aliases like @components
            ],
          },
        },
      },
      {
        test: /\.svg$/,  // Add support for SVG images (use svg-react-loader or other suitable loaders)
        use: ['react-native-svg-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),  // Serve static files from the 'public' directory
    port: 8080,  // Port for your dev server
    hot: true,  // Enable hot module replacement for live updates
    historyApiFallback: true,  // Support for React Router (HTML5 pushState)
  },
  output: {
    filename: 'bundle.js',  // The output bundle file name
    path: path.resolve(__dirname, 'dist'),  // The directory to output the compiled bundle
  },
  devtool: 'source-map',  // Enable source maps for easier debugging
};
