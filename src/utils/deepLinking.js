import * as Linking from "expo-linking";
import queryString from "query-string";

/**
 * Extract query parameters from a URL.
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
 * @param {Function} callback - Function to handle the parsed query parameters.
 * @returns {Function} Unsubscribe function to remove listeners.
 */
export const initializeDeepLinking = (callback) => {
  const handleDeepLink = ({ url }) => {
    const parsedParams = parseQueryParams(url);
    callback(parsedParams);
  };

  const unsubscribe = Linking.addEventListener("url", handleDeepLink);

  Linking.getInitialURL().then((url) => {
    if (url) {
      const parsedParams = parseQueryParams(url);
      callback(parsedParams);
    }
  });

  return () => unsubscribe.remove();
};
