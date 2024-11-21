import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface InformationComponentProps {
  data: Record<string, string>;
}

const InformationComponent: React.FC<InformationComponentProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Query Parameters:</Text>
      <FlatList
        data={Object.entries(data)}
        keyExtractor={([key]) => key}
        renderItem={({ item: [key, value] }) => (
          <Text style={styles.item}>
            {key}: {value}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '80%',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
  },
});

export default InformationComponent;
