import moment from "moment";
import React, { memo, useEffect, useState } from "react";

// hooks
import useTitle from "../../hooks/useTitle";
import useSeasonsByShowId from "../../hooks/react-query/useSeasonsByShowId";
import useEpisodesBySeasonId from "../../hooks/react-query/useEpisodesBySeasonId";
import Loader from "../Loader";

const ShowDetails = memo(function ({ show }) {
  const {
    id,
    name,
    image,
    type,
    language,
    genres,
    rating,
    premiered,
    summary,
    ...rest
  } = {
    ...show,
  };

  const { isLoading: isSeasonsLoading, data: seasons } = useSeasonsByShowId(id);
  useTitle(`TVmaze - ${name}`);

  useEffect(() => {
    if (seasons?.data?.length) {
      setSelectedSeason(seasons.data[0].id);
    }
  }, [seasons]);

  const [selectedSeason, setSelectedSeason] = useState();

  const getItem = (label, value) => {
    return value ? (
      <>
        <p className="col-span-1">{label}</p>
        <p className="col-span-3 text-gray-100">{value}</p>
      </>
    ) : null;
  };

  const { isLoading: isEpisodesLoading, data: episodes } =
    useEpisodesBySeasonId(selectedSeason);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="col-span-1">
        <picture>
          <source src={image?.original} />
          <source src={image?.medium} />
          <img
            src={image?.original ? image?.original : "error.png"}
            loading="lazy"
            className="rounded-sm md:rounded object-cover w-full bg-gradient-to-b h-100"
          />
        </picture>
      </div>
      <div className="py-2 flex flex-col gap-2 col-span-1 md:col-span-3">
        <div className="gap-2 flex flex-col">
          <h3 className="text-xl md:text-4xl text-gray-200 font-medium">
            {name}
          </h3>
          <div className="flex gap-2 text-gray-300">
            <span className="bg-blue-700 py-0.5 px-2 rounded-xl text-sm">
              HD
            </span>
            {rating?.average && <span>&#9733; {rating.average}</span>}
            {premiered && (
              <span>{moment(premiered, "YYYY-MM-DD").format("YYYY")}</span>
            )}
          </div>
        </div>
        {summary && (
          <div
            className="text-sm text-gray-300"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></div>
        )}
        <div className="grid grid-cols-4 text-sm text-gray-300 mt-4 gap-3">
          {getItem("Type", type)}
          {getItem("Language", language)}
          {genres.length ? getItem("Genres", genres.join(", ")) : null}
          {getItem(
            "Premiered",
            moment(premiered, "YYYY-MM-DD").format("MMM DD, YYYY")
          )}
        </div>
      </div>
      {!isSeasonsLoading ? (
        <div className="col-span-1">
          <div className="w-full px-4">
            <select
              className="text-center w-full bg-gray-600 p-2 rounded-md scroll"
              value={selectedSeason}
              onChange={(e) => {
                setSelectedSeason(e.target.value);
              }}
            >
              {seasons?.data?.length
                ? seasons?.data?.map((s) => (
                    <option
                      value={s.id}
                      key={s.id}
                    >{`Season - ${s.number}`}</option>
                  ))
                : null}
            </select>
          </div>
          {!isEpisodesLoading ? (
            episodes?.data?.length ? (
              <ul className="w-full px-4 text-sm font-light h-80 scroll">
                {episodes.data?.map((e) => (
                  <li
                    key={e.id}
                    className="my-1 bg-gray-700 py-2 px-2 rounded hover:bg-gray-800 transition-[background] duration-100 hover:scale-105 hover:font-normal"
                  >
                    {`Episode ${e?.number ? e.number : ""}: ${e.name}`}
                  </li>
                ))}
              </ul>
            ) : null
          ) : (
            <Loader />
          )}
        </div>
      ) : null}
    </div>
  );
});

export default ShowDetails;
