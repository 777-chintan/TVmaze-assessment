import React, { useEffect, useState, useCallback } from "react";
import { getScheduledEpisode } from "../../requests/Episode";
import Episode from "./Episode";
import DatePicker from "../UI/DatePicker";
import EpisodeSkeleton from "./EpisodeSkeleton";

function EpisodeContainer() {
  const [episodes, setEpisodes] = useState();
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const func = useCallback(async () => {
    setIsLoading(true);
    try {
      let data = await getScheduledEpisode(date);
      setEpisodes(data);
    } catch (error) {}
    setIsLoading(false);
  }, [date]);
  useEffect(() => {
    func();
  }, [date]);

  return (
    <div>
      <div className="my-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold lg:font-bold ">
          Episodes
        </h1>
        <DatePicker
          onChange={(value) => {
            setDate(value);
          }}
          initialValue={date}
        />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {isLoading && !!!episodes?.length ? (
            <>
              <EpisodeSkeleton />
              <EpisodeSkeleton />
              <EpisodeSkeleton />
              <EpisodeSkeleton />
              <EpisodeSkeleton />
              <EpisodeSkeleton />
            </>
          ) : null}
          {episodes?.length
            ? episodes.map((e, index) => (
                <Episode episode={e} key={e?.id + index} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default EpisodeContainer;
