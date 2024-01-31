import React from "react";
import videoProduction from "../../../Assets/video-production.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-secondary">
      <div className=" w-[80%] mx-auto flex justify-between items-center gap-x-14">
        <div className="flex items-center gap-x-2">
          <img className="w-12" src={videoProduction} alt="" />
          <h3 className="text-3xl font-extrabold font-stylish italic mt-2 bg-gradient-to-r from-[#88CDA5] via-[#5CC4BA] to-[#45C0C5] inline-block text-transparent bg-clip-text text-primary">
            TSDB
          </h3>
        </div>
        <div className="w-full h-14 flex justify-center bg-secondary font-playFair text-xl text-primary">
          <NavLink className="navItemStyle hover:bg-primary hover:text-secondary transition-all duration-300 px-3 flex justify-center items-center">
            Shows
          </NavLink>
          <NavLink className="navItemStyle hover:bg-primary hover:text-secondary transition-all duration-300 px-3 flex justify-center items-center">
            Movies
          </NavLink>
          <NavLink className="navItemStyle hover:bg-primary hover:text-secondary transition-all duration-300 px-3 flex justify-center items-center">
            Downloads
          </NavLink>
          <NavLink className="navItemStyle hover:bg-primary hover:text-secondary transition-all duration-300 px-3 flex justify-center items-center">
            Whats New
          </NavLink>
          <NavLink className="navItemStyle hover:bg-primary hover:text-secondary transition-all duration-300 px-3 flex justify-center items-center">
            Reviews
          </NavLink>
          <NavLink className="navItemStyle hover:bg-primary hover:text-secondary transition-all duration-300 px-3 flex justify-center items-center">
            Top Rated
          </NavLink>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <input
            className="border border-primary rounded-sm focus:outline-none bg-primary/50"
            type="search"
          />
          <button className="font-playFair bg-primary px-6 rounded-sm hover:bg-primary/50">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
