import React from "react";
import Bookmyshow from './Img/logo.png';
import { BiChevronRight,BiSearch,BiMenu,BiChevronDown,BiChevronLeft,BiShareAlt } from "react-icons/bi";
//for small screen
const NavSm =()=>{
return(
<>
<div className="text-white flex items-center justify-between">
   <div>
      <h3 className="text-xl font-bold">It All Starts Here!</h3>
   </div>
   <div className="w-8 h-8">
      <BiShareAlt className="w-full h-full"/>
   </div>
</div>
</>
)
};
//for large screen
const NavLg =()=>{
return( 
<>
<div className="container mx-auto px-4 flex items-center justify-between ">
   <div className="flex items-center w-1/2">
      <div className="relative w-12 h-full bg-grey-500">
         <img
            src={Bookmyshow}
            alt="logo"
            className="w-full h-full"/>
      </div>
      <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
         <BiSearch/>
         <input type="search" className="w-full  focus:outline-none" placeholder="Search for movies,events,plays,sports and activities"/>
      </div>
   </div>
   <div className="flex items-center gap-3">
      <span className="text-grey-400 text-xs flex items-center hover:text-white cursor-pointer">
         Bhubaneswhar 
         <BiChevronDown />
      </span>
      <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
      sign in
      </button>
      <div className="w-8 h-8 text-white">
         <BiMenu className="w-full h-full"/>
      </div>
   </div>
</div>
</>
)
};
const MovieNavbar =()=>{
return(
<>
<nav className="absolute insert-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-navCol-800 px-4 py-2">
   <div className="md:hidden">
      {
      /*mobile screen*/
      <NavSm />
      }
   </div>
   <div className="hidden lg:hidden md:block ">
      {
      /*tablet screen*/
      <NavSm />
      }
   </div>
   <div className="lf:flex">
      {
      /*desktop screen*/
      <NavLg/>
      }
   </div>
</nav>
</>
)
};
export default MovieNavbar;