import React from "react";
import PropTypes from "prop-types";

/**
 * Component to display details of an individual API call.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.timestamp - The time the API call was received.
 * @param {string} props.method - The HTTP method of the API call (e.g., GET, POST).
 * @param {string} props.endpoint - The endpoint hit by the API call.
 * @param {Object} props.body - The body of the API call (if applicable).
 */
const ApiCallCard = ({ timestamp, method, endpoint, body }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{method} {endpoint}</h3>
      <p style={styles.timestamp}>Received: {new Date(timestamp).toLocaleString()}</p>
      <h4 style={styles.subTitle}>Request Body:</h4>
      <pre style={styles.body}>
        {body ? JSON.stringify(body, null, 2) : "No body content"}
      </pre>
    </div>
  );
};

ApiCallCard.propTypes = {
  timestamp: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
  body: PropTypes.object
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px 0",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  title: {
    margin: "0 0 8px",
    fontSize: "18px",
    color: "#333",
  },
  timestamp: {
    margin: "0 0 16px",
    fontSize: "14px",
    color: "#666",
  },
  subTitle: {
    margin: "0 0 8px",
    fontSize: "16px",
    color: "#444",
  },
  body: {
    padding: "8px",
    backgroundColor: "#f8f8f8",
    borderRadius: "4px",
    fontSize: "14px",
    overflowX: "auto",
  },
};

export default ApiCallCard;
