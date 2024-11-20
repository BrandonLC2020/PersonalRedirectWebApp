import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to Personal Redirect Web App!
      </Text>
      <Text style={styles.subtitle}>
        Running on: {Platform.OS === 'web' ? 'Web' : Platform.OS}
      </Text>
      <Text style={styles.body}>
        This app uses React Native with TypeScript and integrates with ngrok for API redirection.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default App;
