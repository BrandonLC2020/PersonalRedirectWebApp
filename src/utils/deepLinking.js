import * as Linking from "expo-linking";
import queryString from "query-string";

/**
 * Parse query parameters from a URL.
 * @param {string} url - The URL to parse.
 * @returns {Object} Parsed query parameters.
 */
export const parseQueryParams = (url) => {
  if (!url) return null;
  const [, queryStringPart] = url.split("?");
  return queryString.parse(queryStringPart);
};

/**
 * Initialize deep linking listeners.
 * @param {Function} callback - Function to handle parsed query parameters.
 * @returns {Function} Unsubscribe function to remove listeners.
 */
export const initializeDeepLinking = (callback) => {
  const handleDeepLink = ({ url }) => {
    const parsedParams = parseQueryParams(url);
    if (parsedParams) {
      callback(parsedParams); // Ensure the callback is called with parsed parameters
    }
  };

  const unsubscribe = Linking.addEventListener("url", handleDeepLink);

  Linking.getInitialURL().then((url) => {
    if (url) {
      const parsedParams = parseQueryParams(url);
      if (parsedParams) {
        callback(parsedParams);
      }
    }
  });

  return () => unsubscribe.remove();
};
