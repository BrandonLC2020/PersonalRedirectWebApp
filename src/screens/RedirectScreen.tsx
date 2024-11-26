import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const RedirectScreen = ({ route }: { route: any }) => {
  const queryParams = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Query Parameters</Text>
      {Object.keys(queryParams).length > 0 ? (
        <FlatList
          data={Object.entries(queryParams)}
          keyExtractor={([key]) => key}
          renderItem={({ item: [key, value] }) => (
            <Text style={styles.result}>
              {key}: {typeof value === 'string' ? value : String(value)}
            </Text>
          )}
        />
      ) : (
        <Text style={styles.body}>No query parameters available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  body: {
    fontSize: 16,
    color: '#333',
  },
  result: {
    fontSize: 16,
    color: '#555',
  },
});

export default RedirectScreen;
