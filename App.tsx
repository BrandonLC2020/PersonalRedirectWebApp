import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NGROK_URL } from '@env';

const App = () => {
  const handleApiCall = () => {
    const apiUrl = `${NGROK_URL}/api`;
    Alert.alert('API Call', `Making a request to: ${apiUrl}`);
    // You can use fetch or axios here to make actual API calls
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to My App!</Text>
        <Text style={styles.subtitle}>
          {Platform.OS === 'web' 
            ? 'You are using the Web version of the app!' 
            : 'You are using the Mobile version of the app!'}
        </Text>
        <Button title="Make API Call" onPress={handleApiCall} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  content: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
});

export default App;
