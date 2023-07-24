import React, { useEffect, useState } from "react";
import logo from "../assets/logo-color.svg";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";

const Navbar = ({ isMobile, isAuthenticated,logout }) => {
  const [closeMenu, setCloseMenu] = useState(true);
  useEffect(() => {
    setInterval(() => setCloseMenu(true), 10000);
  }, []);
  return (
    <nav className="bg-transparent">
      <div className="h-[80px] w-[80%] mx-auto bg-transparent flex justify-between items-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-[30px] sm:h-[50px] object-contain"
          />
        </Link>
        {!isMobile ? (
          <ul className="flex gap-5 font-dsans ">
            {isAuthenticated?(
              <Link to={`/logout`} onClick={()=> logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</Link>
              ):(
                <Link to={`/login`}>Login</Link>
            )}
              <Link to={`/about`}>About</Link>
              <Link to={`/contact`}>Contact</Link>
          </ul>
        ) : (
          <div className="flex flex-col relative">
            <img
              src={closeMenu ? menu : close}
              alt="navigation_icon"
              className="cursor-pointer object-contain h-[30px] transition-all"
              onClick={() => setCloseMenu(!closeMenu)}
            />
            {!closeMenu && (
              <div className="mt-8 ml-[-50px] absolute bg-accent rounded-md px-5 py-3">
                <ul className="flex flex-col gap-3 font-dsans">
                {isAuthenticated?(
              <Link to={`/logout`} onClick={()=> logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</Link>
              ):(
                <Link to={`/login`}>Login</Link>
            )}
                <Link to={`/about`}>About</Link>
                <Link to={`/contact`}>Contact</Link>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
{/* <img src={user.picture} alt={user.name} className="h-[30px] object-contain rounded-full mr-2"/> */}