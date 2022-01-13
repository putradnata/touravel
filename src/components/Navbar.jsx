import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container flex mx-auto py-10 items-center">
      <div className="flex justify-center items-end w-full lg:justify-start lg:items-end lg:w-1/5">
        <span className="text-4xl lg:text-3xl font-bold text-bluetravel">
          Tour
        </span>
        <span className="text-2xl lg:text-xl font-semibold text-yellowtravel">
          avel
        </span>
      </div>
      <div className="hidden lg:flex w-4/5 gap-14 items-center justify-end">
        <nav className="flex gap-14 text-bluetravel font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="#">Services</NavLink>
          <NavLink to="#">Pricing</NavLink>
          <NavLink to="#">About Us</NavLink>
          <NavLink to="#">Contact</NavLink>
        </nav>
        <Link
          to="#"
          className="bg-yellowtravel p-5 rounded-full font-semibold text-white transition ease-in-out delay-75 hover:scale-110"
        >
          Member Area
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
