//Custom Hook

//State management
import { useCallback, useState } from "react";

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasFinished, sethasFinished] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    sethasFinished(false);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      applyData(data);
    } catch (e) {
      setError(e.message || "Something went wrong!");
    }
    setIsLoading(false);
    sethasFinished(true);
  }, []);

  return {
    isLoading,
    hasFinished,
    error,
    sendRequest,
  };
};

export default useRequest;
