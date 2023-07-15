import { useQuery } from "react-query";
import { getShowSeasonsById } from "../../requests/Show";

function useSeasonsByShowId(showId) {
  return useQuery(
    ["seasons", showId],
    async () => {
      return getShowSeasonsById(showId);
    },
    {
      staleTime: 10 * 60 * 1000,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }
  );
}

export default useSeasonsByShowId;
