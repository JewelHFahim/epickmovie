import { useState, useEffect } from 'react';

export const useFetchWithRetry = (fetchFn, maxRetries = 3, baseDelay = 1000) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (fetchFn) {
          const response = await fetchFn(); // Ensure fetchFn is being called correctly
          if (!response.ok) {
            if (response.status === 429 && retryCount < maxRetries) {
              const retryAfter = parseInt(response.headers.get('Retry-After')) || 1;
              const delay = Math.pow(2, retryCount) * baseDelay;
              await new Promise(resolve => setTimeout(resolve, delay));
              setRetryCount(retryCount + 1);
              return fetchData(); // Retry the request
            }
            throw new Error(`Request failed with status: ${response.status}`);
          }
          const responseData = await response.json();
          setData(responseData);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup code if needed
    };
  }, [fetchFn, maxRetries, baseDelay, retryCount]);

  return { data, error, isLoading };
};

