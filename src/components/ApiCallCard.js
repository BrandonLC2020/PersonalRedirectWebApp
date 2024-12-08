import React from 'react';

const ApiCallCard = ({ method, endpoint, queryParams, timestamp }) => {
  return (
    <div style={styles.card}>
      <h4>Method: {method}</h4>
      <p>Endpoint: {endpoint}</p>
      {queryParams && Object.keys(queryParams).length > 0 && (
        <div>
          <h5>Query Parameters:</h5>
          <ul>
            {Object.entries(queryParams).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p>Timestamp: {new Date(timestamp).toLocaleString()}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default ApiCallCard;
