import React from 'react';
import { LogBox } from 'react-native';
import Navigation from '@navigation/Navigation';

// Ignore specific warnings (optional)
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  return <Navigation />;
};

export default App;
