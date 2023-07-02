import { footerLinks } from '../constants/constants'
import { Link } from 'react-router-dom';
import logo from "../assets/logo-color.svg";
const Footer = () => (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <img
          src={logo}
          width={200}
          height={18}
          alt='logo'
          className='object-contain'
          />
          <p className="text-base text-gray-700">
            Hirepro 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((items)=> (
            <div key={items.title+items.links} className="flex flex-col gap-6 text-base min-w-[170px]">
              <h3 className="font-bold">{items.title}</h3>
              <div className="flex-col flex gap-5">
                {items.links.map((link)=>(
                  <Link
                  key={link.title}
                  href={link.url}
                  className='text-gray-500'>{link.title}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10"></div>
      <p>@2023 Hirepro. All rights reserved</p>
      <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10 mb-2">
        <Link to='/' className='text-gray-500'>Privacy & Policy</Link>
        <Link to='/' className='text-gray-500'>Terms & Condition</Link>
      </div>
    </footer>
  )

export default Footer