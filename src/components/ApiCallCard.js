import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * A reusable card component to display API call details.
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title of the API call (e.g., endpoint name).
 * @param {Object} props.queryParams - The query parameters of the API call.
 */
const ApiCallCard = ({ title, queryParams }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title || "API Call"}</Text>
      <View style={styles.content}>
        {queryParams ? (
          Object.entries(queryParams).map(([key, value]) => (
            <Text key={key} style={styles.text}>
              {key}: {value}
            </Text>
          ))
        ) : (
          <Text style={styles.text}>No query parameters provided.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    marginTop: 4,
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginVertical: 2,
  },
});

export default ApiCallCard;
