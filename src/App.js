import EpisodeContainer from "./components/ScheduledEpisode/EpisodeContainer";
import ShowSearchContainer from "./components/Show/ShowSearch/ShowSearchContainer";

// hooks
import useTitle from "./hooks/useTitle";

function App() {
  useTitle("TVmaze - Home");
  return (
    <div className="mt-20 p-8 text-white">
      <ShowSearchContainer />
      <EpisodeContainer />
    </div>
  );
}

export default App;
