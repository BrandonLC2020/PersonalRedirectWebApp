const NGROK_BASE_URL = process.env.NGROK_URL;

export const fetchRedirectData = async (): Promise<Record<string, string>> => {
    try {
      const response = await fetch(`${NGROK_BASE_URL}/redirect`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data.params; // Assume the server returns { params: { key: value } }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unknown error occurred';
      throw new Error(errorMessage);
    }
  };
  
