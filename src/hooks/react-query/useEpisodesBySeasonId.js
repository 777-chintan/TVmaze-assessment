import { useQuery } from "react-query";
import { getEpisodesBySeasonsId } from "../../requests/Show";

function useEpisodesBySeasonId(seasonId) {
  return useQuery(
    ["seasons", seasonId, "episodes"],
    async () => {
      return getEpisodesBySeasonsId(seasonId);
    },
    {
      staleTime: 10 * 60 * 1000,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }
  );
}

export default useEpisodesBySeasonId;
