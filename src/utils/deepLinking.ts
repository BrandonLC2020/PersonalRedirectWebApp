import { Linking } from 'react-native';

export const parseQueryParams = (url: string): Record<string, string> => {
  const queryParams: Record<string, string> = {};
  const queryString = url.split('?')[1]; // Get the part after '?'

  if (queryString) {
    queryString.split('&').forEach((param) => {
      const [key, value] = param.split('=');
      if (key && value) {
        queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
      }
    });
  }

  return queryParams;
};

export const handleDeepLink = async (
  callback: (params: Record<string, string>) => void
): Promise<void> => {
  // Get the initial URL on app launch
  const initialUrl = await Linking.getInitialURL();
  if (initialUrl) {
    const params = parseQueryParams(initialUrl);
    callback(params);
  }

  // Listen for new incoming URLs
  Linking.addEventListener('url', (event) => {
    const params = parseQueryParams(event.url);
    callback(params);
  });
};

export const stopListeningForDeepLinks = () => {
  Linking.removeAllListeners('url');
};
