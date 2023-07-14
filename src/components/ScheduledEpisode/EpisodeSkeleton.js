import React from "react";

function EpisodeSkeleton() {
  return (
    <div className="relative animate-pulse">
      <div className="relative">
        <div className="rounded-sm md:rounded w-full h-80 bg-gray-200" />
        <div className="absolute bg-blue-700 text-blue-200 top-2 left-2 py-1 px-2 rounded">
          HD
        </div>
      </div>
      <div className="py-2 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="h-8 bg-gray-700 w-20"></div>
          <div className="h-8 bg-gray-700 w-20"></div>
        </div>
        <div className="h-6 w-60 bg-gray-700"></div>
      </div>
    </div>
  );
}

export default EpisodeSkeleton;
