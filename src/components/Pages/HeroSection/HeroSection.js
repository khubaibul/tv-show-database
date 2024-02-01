import React from "react";
import showsCollage from "../../../Assets/shows-collage.jpg";
import { FaCloudDownloadAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col-reverse lg:px-28 md:px-16 px-8 py-24 gap-y-10 justify-between bg-primary">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-col gap-y-4 text-secondary">
            <h2 className="lg:text-5xl md:text-4xl text-3xl font-playFair font-extrabold">
              TV Show Database
            </h2>
            <h3 className="lg:text-xl md:text-xl font-semibold">
              Keep track of your favorite TV Shows and TV Series.
            </h3>
          </div>
          <div className="flex lg:justify-start md:justify-start justify-center">
            <button className="flex items-center gap-x-2 text-lg px-8 py-2 rounded bg-secondary text-primary font-playFair hover:bg-opacity-0 hover:text-secondary hover:outline transition-all duration-300">
              <FaCloudDownloadAlt className="text-2xl" />
              Download Latest
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-[700px] md:w-[500px] rounded-md overflow-hidden">
        <img
          src={showsCollage}
          className="hover:scale-110 transition-all duration-500"
          alt="TV Shows Collection Collage"
        />
      </div>
    </div>
  );
};

export default HeroSection;
