import React, { useEffect, useState } from "react";
import logo from "../assets/logo-color.svg";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ isMobile, isAuthenticated,logout }) => {
  const [closeMenu, setCloseMenu] = useState(true);
  const {user} = useAuth0()
  return (
    <nav className="bg-transparent">
      <div className="h-[80px] w-[80%] mx-auto bg-transparent flex justify-between items-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-[30px] sm:h-[40px] object-contain"
          />
        </Link>
        {!isMobile ? (
          <ul className="flex gap-5 font-dsans ">
            {isAuthenticated?(
              <>
              <div className="user flex items-center gap-2  rounded-xl ml-[-20%]">
              <img src={user.picture} alt="user_image" className="h-10 w-10 rounded-full shadow object-contain cursor-pointer" />
              <Link to={`/logout`} onClick={()=> logout({ logoutParams: { returnTo: window.location.origin } })} ><h2 className="text-3xl">📲</h2></Link>
              </div>
              </>
              ):(
                <>
                <Link to={`/login`}>Login</Link>
              <Link to={`/about`}>About</Link>
              <Link to={`/contact`}>Contact</Link>
              </>
            )}
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
              <div className="bg-primary w-[130px] h-[150px] mt-10  rounded-md font-dsans inset-0 ml-[-250%] absolute z-10 shadow-md">
                <ul className="flex justify-center h-[150px] ml-[25%] flex-col gap-3">
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