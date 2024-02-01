import React, { useState } from "react";
import videoProduction from "../../../Assets/video-production.png";
import { Link, NavLink } from "react-router-dom";
import menuClose from "../../../Assets/icon-close.svg";
import hamBurger from "../../../Assets/icon-hamburger.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <div className=" lg:w-[80%] md:w-full mx-auto lg:flex md:flex hidden justify-between items-center lg:gap-x-14 md:gap-x-5">
        <Link to="/" className="flex items-center gap-x-2">
          <img className="w-12" src={videoProduction} alt="" />
          <h3 className="text-3xl font-extrabold font-stylish italic mt-2 bg-gradient-to-r from-[#88CDA5] via-[#5CC4BA] to-[#45C0C5] inline-block text-transparent bg-clip-text text-primary">
            TSDB
          </h3>
        </Link>
        <div className="w-full h-14 flex justify-center bg-secondary font-playFair text-xl text-primary">
          {navItems}
        </div>
        <div className="lg:hidden md:hidden flex flex-col justify-center bg-secondary font-playFair text-xl text-primary">
          {navItems}
        </div>
        <div className="lg:flex hidden justify-center items-center gap-x-2">
          <input
            className="border border-primary rounded-sm focus:outline-none bg-primary/50"
            type="search"
          />
          <button className="font-playFair bg-primary px-6 rounded-sm hover:bg-primary/50">
            Search
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div className="lg:hidden md:hidden top-0 left-0 fixed h-full w-[70vw] transition-all ease-in-out duration-500 translate-y-0 z-10 p-4 backdrop-blur-[80px] text-primary">
          <div className="flex justify-start mt-8 mb-5 mr-2">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <img src={menuClose} className="w-7" alt="" />
            </button>
          </div>
          <Link
            to="/"
            className="flex items-center justify-center gap-x-2 my-4"
          >
            <img className="w-12" src={videoProduction} alt="" />
            <h3 className="text-3xl font-extrabold font-stylish italic mt-2 bg-gradient-to-r from-[#88CDA5] via-[#5CC4BA] to-[#45C0C5] inline-block text-transparent bg-clip-text text-primary">
              TSDB
            </h3>
          </Link>
          <div className="flex flex-col gap-y-5">{navItems}</div>
        </div>
      ) : (
        <div className="lg:hidden md:hidden flex justify-between items-center pr-8 pl-2 py-2">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src={hamBurger} className="w-7" alt="" />
          </button>
          <Link to="/" className="flex items-center gap-x-2">
            <img className="w-12" src={videoProduction} alt="" />
            <h3 className="text-3xl font-extrabold font-stylish italic mt-2 bg-gradient-to-r from-[#88CDA5] via-[#5CC4BA] to-[#45C0C5] inline-block text-transparent bg-clip-text text-primary">
              TSDB
            </h3>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
