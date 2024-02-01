import React from "react";
import { useGetShowsQuery } from "../../../features/shows/showsSlice";
import { TbListDetails } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";
import { IoTimerSharp } from "react-icons/io5";
import { IoLinkSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader";

const Shows = () => {
  const { data: shows, isLoading, isError } = useGetShowsQuery();

  if (isLoading || isError) {
    return <Loader />;
  }

  return (
    <div className="w-[80%] mx-auto my-10">
      <h3 className="font-stylish text-4xl text-blue">Trending</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-2">
        {shows?.map((tvShow, i) => (
          <div
            key={i}
            className=" bg-secondary shadow-lg hover:shadow-xl rounded-lg text-gray-900 pb-2 group"
          >
            <div className="rounded-t-lg h-48 overflow-hidden">
              <img
                className="object-cover object-top w-full group-hover:scale-110 transition-all duration-500"
                src={tvShow?.show?.image?.original}
                alt="Show Original Img"
              />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                className=""
                src={tvShow?.show?.image?.medium}
                alt="Show Img"
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="text-2xl text-white font-bold font-playFair ">
                {tvShow?.show?.name}
              </h2>
            </div>
            <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around text-primary font-semibold">
              <li className="flex flex-col items-center justify-around">
                <FaStar className="text-lg" />
                <span>
                  {(tvShow?.show?.rating?.average &&
                    tvShow?.show?.rating?.average) ||
                    (!tvShow?.show?.rating?.average && "N/A")}
                </span>
              </li>
              <li className="flex flex-col items-center justify-between">
                <IoTimerSharp className="text-lg" />
                <span>{tvShow?.show?.runtime} Minutes</span>
              </li>
              <li className="flex items-center justify-around">
                <a
                  href={
                    (tvShow?.show?.officialSite &&
                      tvShow?.show?.officialSite) ||
                    (!tvShow?.show?.officialSite && tvShow?.show?.url)
                  }
                  className="flex flex-col items-center justify-around"
                >
                  <IoLinkSharp className="text-lg" />
                  View
                </a>
              </li>
            </ul>
            <div className="flex justify-center">
              <Link
                to={`/show/${tvShow?.show?.id}`}
                className="flex items-center gap-x-2 text-lg px-8 py-1 rounded bg-primary text-secondary font-playFair hover:bg-opacity-0 hover:outline outline-primary hover:text-primary transition-all duration-300"
              >
                <TbListDetails className="text-2xl" />
                Summary
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shows;
