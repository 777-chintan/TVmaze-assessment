import { useEffect, useState } from "react";

function useDebounce(value = "", delay = 300) {
  const [data, setData] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => {
      setData(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return data;
}

export default useDebounce;
