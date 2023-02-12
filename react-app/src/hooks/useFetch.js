import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  console.log("useFetch started");
  const doFetch = (options = {}) => {
    console.log("do fetch");
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios(url, options);
        setResponse(res.data);
      } catch (err) {
        const data = err.response ? err.response.data : "Server error";
        setError(data);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [isLoading, options, url]);

  return [{ response, error, isLoading }, doFetch];
};

export default useFetch;

// example
/*
const [{ response, error, isLoading }, doFetch] = useFetch(`${SERVER_URL}/posts`);
  console.log("edit", response, error, isLoading);
  useEffect(() => {
    doFetch();
  }, [doFetch]);
*/