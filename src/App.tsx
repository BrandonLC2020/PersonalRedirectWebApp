import React, { useEffect, useState } from 'react';
import { Alert, View, Text, StyleSheet } from 'react-native';
import { handleDeepLink, stopListeningForDeepLinks } from './utils/deepLinking';
import { fetchRedirectData } from './utils/ngrokHelper';

const App = () => {
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});

  useEffect(() => {
    // Set up deep link handling
    handleDeepLink((params) => {
      setQueryParams(params);
      console.log('Deep link parameters:', params);
    });

    return () => {
      stopListeningForDeepLinks();
    };
  }, []);

  useEffect(() => {
    // Fetch data from ngrok whenever queryParams are updated
    if (Object.keys(queryParams).length > 0) {
      fetchRedirectData()
        .then((data) => {
          console.log('Ngrok API Data:', data);
          setQueryParams((prev) => ({ ...prev, ...data }));
        })
        .catch((error) => {
          Alert.alert('Error', error.message);
        });
    }
  }, [queryParams]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Personal Redirect Web App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});


export default App;
