import React from "react";
import logo from "../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-[#007075] text-white">
      <div className="max-w-7xl mx-auto p-2 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between">
          <img src={logo} className="h-12" alt="" />
          <nav className="flex items-center gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/colleges">Colleges</NavLink>
            <NavLink to="/admission">Admission</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
          </nav>
          <nav className="flex items-center gap-4">
            <NavLink to="/login">LogIn</NavLink>
            <NavLink to="/signup">SignUp</NavLink>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
