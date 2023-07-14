import React, { memo } from "react";

const Episode = memo(function ({ episode }) {
  let { name, season, number, image, _embedded, ...rest } = { ...episode };
  let { show } = { ..._embedded };
  return (
    <div
      className="relative cursor-pointer duration-200 transition hover:scale-105"
      onClick={() => {}}
    >
      <div className="relative">
        <img
          crossOrigin
          src={image ? image : show?.image?.original}
          className="rounded-sm md:rounded object-cover w-full bg-gradient-to-b h-80"
        />
        <div className="absolute bg-blue-700 text-blue-200 top-2 left-2 py-1 px-2 rounded">
          HD
        </div>
      </div>
      <div className="py-2 flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm">
          <div className="border border-gray-600 p-1 bg-gray-800">
            <h6>Season - {season}</h6>
          </div>
          <div className="border border-gray-600 p-1 bg-gray-800">
            <h6>Episode - {number}</h6>
          </div>
        </div>
        <h3 className="text-lg md:text-xl font-medium">{show.name}</h3>
      </div>
    </div>
  );
});

export default Episode;
