import { AppRegistry, Platform } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from '../app.json';

if (Platform.OS === 'web') {
  // Dynamically import react-dom/client for web rendering
  import('react-dom/client').then(({ createRoot }) => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      const root = createRoot(rootElement); // Use React 18+ API
      root.render(<App />);
    }
  });
} else {
  // For mobile platforms
  AppRegistry.registerComponent(appName, () => App);
}
