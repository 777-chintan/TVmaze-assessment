import { useQuery } from "react-query";
import { getShowById } from "../../requests/Show";

function useShowById(showId) {
  return useQuery(
    ["show", showId],
    async () => {
      return getShowById(showId);
    },
    {
      staleTime: 10 * 60 * 1000,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }
  );
}

export default useShowById;
