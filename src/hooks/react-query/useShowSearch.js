import { useQuery } from "react-query";
import { searchShowByQuery } from "../../requests/Show";

function useShowSearch(query) {
  return useQuery(
    ["show", "search", query],
    async () => {
      return searchShowByQuery(query);
    },
    {
      staleTime: 10 * 60 * 1000,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }
  );
}

export default useShowSearch;
