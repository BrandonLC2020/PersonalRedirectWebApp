import { NGROK_URL } from '@env';

interface ApiResponse<T> {
  data: T;
  status: number;
}

// Utility function to handle fetch requests
const apiFetch = async <T>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${NGROK_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'An error occurred while fetching the data');
    }

    return { data, status: response.status };
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

// Example API call function
export const getUserData = async (userId: string) => {
  const response = await apiFetch<{ name: string; email: string }>(`/users/${userId}`);
  return response.data;
};

// Example API POST request
export const createUser = async (userData: { name: string; email: string }) => {
  const response = await apiFetch<{ id: string }>(`/users`, {
    method: 'POST',
    body: JSON.stringify(userData),
  });
  return response.data;
};

// You can add more API request functions here as needed
