import React, { useState } from 'react'
import logo from "../news-homepage-main/assets/images/logo.svg"
import menu from '../news-homepage-main/assets/images/icon-menu.svg'
import menu_closed from '../news-homepage-main/assets/images/icon-menu-close.svg'


export const Navbar = () => {
  const [toggle, setToggle] = useState(false) 
  return (
    <div className={`text-center col-span-3 row-span-1 flex 
    flex-row justify-between items-start    
    `}>
      <img src={logo} alt="logo" />
      <div className={`flex flex-col items-center 
      justify-center sm:hidden
      `}>
        <img className='w-[30px] h-[30px]'
         src={toggle ? menu_closed : menu} alt="menu"
          onClick={() => setToggle(prev => !prev)}/>
          <ul className={`flex-col items-center 
          justify-center w-[35%] md:w-[50%] right-[-20px] top-20
          mt-4
           ${toggle ? 'flex' : 'hidden'}
           `}>
            <li className='cursor-pointer text-dark_gray hover:text-red'>Home </li>
            <li className='cursor-pointer text-dark_gray hover:text-red'>New</li>
            <li className='cursor-pointer text-dark_gray hover:text-red'>Popular</li>
            <li className='cursor-pointer text-dark_gray hover:text-red'>Trending</li>
            <li className='cursor-pointer text-dark_gray hover:text-red'>Categories</li>
      </ul>
      </div>
      <ul className='sm:flex hidden flex-row justify-between w-[35%] md:w-[50%]'>
        <li className='cursor-pointer text-dark_gray hover:text-red'>Home </li>
        <li className='cursor-pointer text-dark_gray hover:text-red'>New</li>
        <li className='cursor-pointer text-dark_gray hover:text-red'>Popular</li>
        <li className='cursor-pointer text-dark_gray hover:text-red'>Trending</li>
        <li className='cursor-pointer text-dark_gray hover:text-red'>Categories</li>
      </ul>
    </div>
  )
}
