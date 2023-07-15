import React from "react";
import { useParams } from "react-router-dom";
import useShowById from "../hooks/react-query/useShowById";

// components
import ShowDetails from "../components/Show/ShowDetails";
import Loader from "../components/Loader";

function Show() {
  const { showId } = useParams();
  const { isLoading, data } = useShowById(showId);

  return (
    <div className="mt-20 p-8 text-white">
      {!isLoading ? (
        data?.data ? (
          <ShowDetails show={data.data} />
        ) : null
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Show;
