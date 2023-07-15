import React, { useState } from "react";

// hooks
import useDebounce from "../../../hooks/useDebounceValue";
import useShowSearch from "../../../hooks/react-query/useShowSearch";

// components
import ShowCard from "../ShowCard";
import ShowCardSkeleton from "../ShowCardSkeleton";

function ShowSearchContainer() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  const { isLoading, data } = useShowSearch(debouncedQuery);

  return (
    <div>
      {/* search bar */}
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-full">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          placeholder="Search Shows"
        />
      </div>

      {/* show container */}
      {!isLoading ? (
        data?.data?.length ? (
          <div>
            <div className="my-4 flex items-center justify-between">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold lg:font-bold ">
                Shows
              </h1>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {data?.data?.length
                  ? data.data.map((s, index) => (
                      <ShowCard show={s.show} key={s?.show?.id + index} />
                    ))
                  : null}
              </div>
            </div>
          </div>
        ) : null
      ) : (
        <div>
          <div className="my-4 flex items-center justify-between">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold lg:font-bold ">
              Shows
            </h1>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <ShowCardSkeleton />
              <ShowCardSkeleton />
              <ShowCardSkeleton />
              <ShowCardSkeleton />
              <ShowCardSkeleton />
              <ShowCardSkeleton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowSearchContainer;
