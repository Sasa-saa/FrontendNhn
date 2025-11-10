// useFetch.jsx
import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);       // store fetched data
  const [loading, setLoading] = useState(true); // track loading state
  const [error, setError] = useState(null);     // track errors

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController(); // allows canceling fetch
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { ...options, signal });
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // cleanup: abort fetch if component unmounts
    return () => controller.abort();
  }, [url, JSON.stringify(options)]);

  return { data, loading, error };
};

export default useFetch;

