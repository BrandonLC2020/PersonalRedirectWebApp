import React, { useState, useEffect } from "react";
import ApiCallCard from "./src/components/ApiCallCard";

const App = () => {
  const [apiCalls, setApiCalls] = useState([]);

  useEffect(() => {
    // Fetch or simulate API call data
    const fetchApiCalls = async () => {
      // Example static data
      const exampleCalls = [
        {
          timestamp: new Date().toISOString(),
          method: "POST",
          endpoint: "/api/webhook",
          body: { message: "Hello, world!" },
        },
        {
          timestamp: new Date().toISOString(),
          method: "GET",
          endpoint: "/api/data",
          body: null,
        },
      ];
      setApiCalls(exampleCalls);
    };

    fetchApiCalls();
  }, []);


  // useEffect(() => {
  //   const socket = io(process.env.NGROK_URL);
  
  //   socket.on('newRequest', (data) => {
  //     console.log('Received new request:', data);
  //     setApiCalls((prevApiCalls) => [data, ...prevApiCalls]);
  //   });
  
  //   return () => socket.disconnect();
  // }, []);
  
  return (
    <div style={{ padding: "16px" }}>
      <h1>API Call Monitor</h1>
      {apiCalls.map((call, index) => (
        <ApiCallCard
          key={index}
          timestamp={call.timestamp}
          method={call.method}
          endpoint={call.endpoint}
          body={call.body}
        />
      ))}
    </div>
  );
};

export default App;
