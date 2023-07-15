import EpisodeContainer from "./components/ScheduledEpisode/EpisodeContainer";
import ShowSearchContainer from "./components/Show/ShowSearch/ShowSearchContainer";

function App() {
  return (
    <div className="mt-20 p-8 text-white">
      <ShowSearchContainer />
      <EpisodeContainer />
    </div>
  );
}

export default App;
