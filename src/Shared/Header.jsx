import React, { useContext, useEffect } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import logo from "../assets/logo/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { LayerContext } from "../Context/AuthContext";
const Header = () => {
  const [isHidden, setIsHidden] = React.useState(false);
  const location = useLocation();
  const { user } = useContext(LayerContext);
  useEffect(() => {
    setIsHidden(false);
  }, [location.pathname]);
  return (
    <div>
      <div className="bg-[#007075] text-white">
        <div className="max-w-7xl mx-auto p-2 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between">
            <img src={logo} className="h-12" alt="" />
            <nav className="items-center gap-4 hidden lg:flex">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/colleges">Colleges</NavLink>
              <NavLink to="/admission">Admission</NavLink>
              <NavLink to="/admission">My College</NavLink>
              <NavLink to="/about-us">About Us</NavLink>
            </nav>
            <nav className="items-center gap-4 hidden lg:flex">
              {user ? (
                <>
                  <p>{user?.email}</p>
                  <button>LogOut</button>
                </>
              ) : (
                <>
                  <NavLink to="/login">LogIn</NavLink>
                  <NavLink to="/signup">SignUp</NavLink>
                </>
              )}
            </nav>
            <AiOutlineMenuUnfold
              className="lg:hidden cursor-pointer"
              size={33}
              onClick={() => setIsHidden(!isHidden)}
            />
          </header>
        </div>
      </div>
      <header
        className={`${
          !isHidden ? "hidden" : ""
        } absolute bg-black text-white h-[calc(100vh-80px)] w-full lg:hidden z-10`}
      >
        <nav className="flex flex-col gap-4 mt-4 ml-4 text-xl">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/colleges">Colleges</NavLink>
          <NavLink to="/admission">Admission</NavLink>
          <NavLink to="/admission">My College</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          {user ? (
            <>
              <p>{user?.email}</p>
              <p className="cursor-pointer">LogOut</p>
            </>
          ) : (
            <>
              <NavLink to="/login">LogIn</NavLink>
              <NavLink to="/signup">SignUp</NavLink>
            </>
          )}
        </nav>
        <div className="flex items-center absolute gap-4 ml-4 bottom-[10vh]">
          <BsFacebook className="h-7 w-7 text-white" />
          <BsTwitter className="h-7 w-7 text-white" />
          <BsYoutube className="h-7 w-7 text-white" />
          <BsInstagram className="h-7 w-7 text-white" />
          <BsTiktok className="h-7 w-7 text-white" />
        </div>
      </header>
    </div>
  );
};

export default Header;
