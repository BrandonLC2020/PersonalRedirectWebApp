import React, { useEffect, useState } from 'react';

const App = () => {
  const [apiCalls, setApiCalls] = useState([]);

  useEffect(() => {
    // Fetch ngrok URL or API call logs here
  }, []);

  return (
    <div>
      <h1>API Call Monitor</h1>
      <ul>
        {apiCalls.map((call, index) => (
          <li key={index}>{JSON.stringify(call)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
