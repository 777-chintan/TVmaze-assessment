import { useQuery, useQueryClient } from "react-query";
import { getScheduledEpisode } from "../../requests/Episode";

function useScheduledEpisode(date) {
  const queryClient = useQueryClient();
  return useQuery(
    ["scheduled-episode", date],
    async () => {
      return getScheduledEpisode(date);
    },
    {
      staleTime: 10 * 60 * 1000,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }
  );
}

export default useScheduledEpisode;
