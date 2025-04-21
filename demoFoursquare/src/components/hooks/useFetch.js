
import { useState, useEffect } from 'react';
import axios from 'axios';
//instead of using multiple useState and useEffect hooks, we can create a custom hook to fetch data from an API
const useFetch = (url) => {
  const [data, setData] = useState(null);//useFetch takes a URL as an argument and returns the fetched data

  useEffect(() => {//useEffect perform side effects in function components
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, [url]);//it will re-run the effect whenever the url changes

  return [data];
};

export default useFetch;
