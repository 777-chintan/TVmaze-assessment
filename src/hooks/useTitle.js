import React, { useEffect } from "react";

function useTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "";
    };
  }, []);
}

export default useTitle;
