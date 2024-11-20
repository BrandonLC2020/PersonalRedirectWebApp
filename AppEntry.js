import { registerRootComponent } from 'expo';
import { Platform } from 'react-native';
import App from './App';

// Enable ngrok on web for API redirects
if (Platform.OS === 'web') {
  const ngrokUrl = process.env.NGROK_URL || 'http://localhost:3000';
  console.log(`Using ngrok URL: ${ngrokUrl}`);
}

// Register the main App component as the root
registerRootComponent(App);
