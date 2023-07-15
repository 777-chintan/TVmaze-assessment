import React, { useState } from "react";
import moment from "moment/moment";

// hooks
import useScheduledEpisode from "../../hooks/react-query/useScheduledEpisode";

// components
import Episode from "./Episode";
import DatePicker from "../UI/DatePicker";
import EpisodeSkeleton from "./EpisodeSkeleton";

function EpisodeContainer() {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const { isLoading, data } = useScheduledEpisode(date);

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
          {isLoading && !!!data?.data?.length ? (
            <>
              <EpisodeSkeleton />
              <EpisodeSkeleton />
              <EpisodeSkeleton />
              <EpisodeSkeleton />
              <EpisodeSkeleton />
              <EpisodeSkeleton />
            </>
          ) : null}
          {data?.data?.length
            ? data.data.map((e, index) => (
                <Episode episode={e} key={e?.id + index} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default EpisodeContainer;
