import moment from "moment";
import React, { memo } from "react";

const ShowDetails = memo(function ({ show }) {
  const {
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

  const getItem = (label, value) => {
    return value ? (
      <>
        <p className="col-span-1">{label}</p>
        <p className="col-span-3 text-gray-100">{value}</p>
      </>
    ) : null;
  };

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
    </div>
  );
});

export default ShowDetails;
