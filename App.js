import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { initializeDeepLinking } from "./src/utils/deepLinking";
import ApiCallCard from "./src/components/ApiCallCard";

export default function App() {
  const [apiCalls, setApiCalls] = useState([]);

  useEffect(() => {
    const unsubscribe = initializeDeepLinking((queryParams) => {
      if (queryParams) {
        // Add the new API call details to the list
        setApiCalls((prev) => [
          ...prev,
          {
            title: `API Call ${prev.length + 1}`, // Generate a title for the call
            queryParams,
          },
        ]);
      }
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Incoming API Calls</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {apiCalls.length > 0 ? (
          apiCalls.map((call, index) => (
            <ApiCallCard
              key={index}
              title={call.title}
              queryParams={call.queryParams}
            />
          ))
        ) : (
          <Text style={styles.noDataText}>No API calls received yet.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  scrollView: {
    paddingBottom: 16,
  },
  noDataText: {
    fontSize: 18,
    textAlign: "center",
    color: "#999",
    marginTop: 20,
  },
});
