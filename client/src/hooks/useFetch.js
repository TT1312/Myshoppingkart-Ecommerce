import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/Api";

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(null);
  const [error, seterr] = useState(null);

  useEffect(() => {
    setloading("Loading...");
    setdata(null);
    seterr(null);

    fetchDataFromApi(url)
      .then((res) => {
        setdata(res.data);
        setloading(null);
      })
      .catch((error) => {
        setloading(null);
        seterr(error);
      });
  }, [url]);

  
  return { data, loading, error };
};

export default useFetch;
