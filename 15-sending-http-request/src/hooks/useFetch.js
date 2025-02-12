import { useEffect, useState } from "react";

export function useFetch(fetchFun, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFun();
        setFetchData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchFun]);

  return {
    isFetching,
    fetchedData,
    setFetchData,
    error,
  };
}
