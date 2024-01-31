import React from "react";
import showsCollage from "../../../Assets/shows-collage.jpg";
import { FaCloudDownloadAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="flex px-28 py-24 justify-between bg-primary">
      <div className="flex items-center">
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-col gap-y-4 text-secondary">
            <h2 className="text-5xl font-playFair font-extrabold">
              TV Show Database
            </h2>
            <h3 className="text-xl font-semibold">
              Keep track of your favorite TV Shows and TV Series.
            </h3>
          </div>
          <div>
            <button className="flex items-center gap-x-2 text-lg px-8 py-2 rounded bg-secondary text-primary font-playFair hover:bg-opacity-0 hover:text-secondary hover:outline transition-all duration-300">
              <FaCloudDownloadAlt className="text-2xl" />
              Download Latest
            </button>
          </div>
        </div>
      </div>
      <img
        src={showsCollage}
        className="w-[700px] rounded-md"
        alt="TV Shows Collection Collage"
      />
    </div>
  );
};

export default HeroSection;
