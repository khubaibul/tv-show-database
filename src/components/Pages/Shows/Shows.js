import React from "react";
import { useGetShowsQuery } from "../../../features/shows/showsSlice";

const Shows = () => {
  const { data } = useGetShowsQuery();

  console.log(data);
  return (
    <div>
      <h3 className="font-stylish text-4xl text-blue">TV Show Database</h3>
    </div>
  );
};

export default Shows;
