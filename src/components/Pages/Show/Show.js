import React from "react";
import { useParams } from "react-router-dom";
import { useGetShowsQuery } from "../../../features/shows/showsSlice";

const Show = () => {
  const { id } = useParams();

  const { data: shows } = useGetShowsQuery();
  const showFindById = shows?.find((singleShow) => singleShow?.show?.id == id);

  return <div>{id}</div>;
};

export default Show;
