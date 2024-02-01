import React from "react";
import videoProduction from "../../../Assets/video-production.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#0090C8" : "",
      color: isActive ? "#032541" : "",
    };
  };

  const navItems = (
    <>
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
      <NavLink
        style={navLinkStyle}
        to="/bookings"
        className="navItemStyle hover:bg-primary hover:text-secondary transition-all duration-300 px-3 flex justify-center items-center"
      >
        Bookings
      </NavLink>
    </>
  );

  return (
    <div className="bg-secondary">
      <div className=" lg:w-[80%] md:w-full mx-auto flex justify-between items-center gap-x-14">
        <Link to="/" className="flex items-center gap-x-2">
          <img className="w-12" src={videoProduction} alt="" />
          <h3 className="text-3xl font-extrabold font-stylish italic mt-2 bg-gradient-to-r from-[#88CDA5] via-[#5CC4BA] to-[#45C0C5] inline-block text-transparent bg-clip-text text-primary">
            TSDB
          </h3>
        </Link>
        <div className="w-full h-14 flex justify-center bg-secondary font-playFair text-xl text-primary">
          {navItems}
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
