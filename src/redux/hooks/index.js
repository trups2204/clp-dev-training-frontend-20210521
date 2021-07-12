import React, { useState, useEffect, useCallback } from "react";

export const useFetch = (tag) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTag, setSearchTag] = React.useState("");

    useEffect(() => {
      const fetchData = async () => {
        setSearchTag(tag);
        setIsLoading(true);
        try {
          const res = await fetch("http://localhost:5000/api/images?tag="+ tag, options);
          const json = await res.json();
          setResponse(json);
          setIsLoading(false)
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, []);
    return { response, error, isLoading,searchTag };
      };
  