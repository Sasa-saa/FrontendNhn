// useFetch.jsx
import { useState, useEffect, useMemo } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);       // store fetched data
  const [loading, setLoading] = useState(true); // track loading state
  const [error, setError] = useState(null);     // track errors

  // create a stable serialized representation of options for dependencies
  const serializedOptions = useMemo(() => {
    try {
      return JSON.stringify(options);
    } catch {
      // fallback to an empty object string if options cannot be stringified
      return "{}";
    }
  }, [options]);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController(); // allows canceling fetch
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // parse options from the stable serialized string (safe because we handled stringify errors)
        const opts = serializedOptions === "{}" ? {} : JSON.parse(serializedOptions);
        const response = await fetch(url, { ...opts, signal });
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
  }, [url, serializedOptions]);

  return { data, loading, error };
};

export default useFetch;

