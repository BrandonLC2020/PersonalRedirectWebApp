import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native';

const HomeScreen = () => {
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const fetchQueryParams = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://your-ngrok-url.ngrok.io/redirect');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setQueryParams(data.params);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unknown error occurred';
      Alert.alert('Error', errorMessage);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redirect Parameter Viewer</Text>
      <Text style={styles.body}>
        Fetch and display query parameters sent to the ngrok URL.
      </Text>
      <Button
        title={loading ? 'Fetching...' : 'Fetch Query Parameters'}
        onPress={fetchQueryParams}
        disabled={loading}
      />
      {Object.keys(queryParams).length > 0 && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Query Parameters:</Text>
          <FlatList
            data={Object.entries(queryParams)}
            keyExtractor={([key]) => key}
            renderItem={({ item: [key, value] }) => (
              <Text style={styles.result}>
                {key}: {value}
              </Text>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  body: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  resultsContainer: {
    marginTop: 20,
    width: '80%',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  result: {
    fontSize: 16,
    color: '#555',
  },
});

export default HomeScreen;
