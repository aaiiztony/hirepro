import React, { useState } from 'react'
import logo from "../assets/logo-color.svg";
import { Link } from 'react-router-dom';
import { close, menu } from '../assets';

const Navbar = ({isMobile}) => {
  const scrolled = false;
  const [closeMenu, setCloseMenu] = useState(true);
  return (
    <nav className={`${scrolled?"bg-secondary shadow":"bg-transparent"}`}>
    <div className='h-[80px] w-[80%] mx-auto bg-transparent flex justify-between items-center'>
      <img src={logo} alt="logo" className='h-[30px] sm:h-[50px] object-contain' />
      {!isMobile?(
      <ul className='flex gap-5 font-dsans'>
        <Link to={`/signup`}>Signup</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/contact`}>Contact</Link>
      </ul>
      ):(
        <div className='flex flex-col relative'>
      <img src={closeMenu?menu:close} alt='navigation_icon' className='object-contain h-[30px] transition-all' onClick={()=>setCloseMenu(!closeMenu)}/>
      {!closeMenu && (
        <div className='mt-8 ml-[-50px] absolute bg-accent rounded-md px-5 py-3'>
        <ul className='flex flex-col gap-3 font-dsans'>
        <Link to={`/signup`}>Signup</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/contact`}>Contact</Link>
      </ul>
        </div>
      )}
      </div>
      )}
    </div>
    </nav>
  )
}

export default Navbar