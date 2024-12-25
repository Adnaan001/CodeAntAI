import logo from '../../assets/logo.png'
import codeAntAI from '../../assets/CodeAnt_AI.png'
import { NavLinks } from './NavLinks'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';


export const SideBar=({navOpen,setNavOpen})=>{
    return(
        <div 
            className='relative py-4 px-4 flex flex-row flex-wrap sm:flex-col justify-between sm:justify-normal 
            items-center w-full min-h-fit sm:min-h-screen sm:max-w-fit bg-white z-20 border-b border-gray-200'
        >
            <div className='flex items-center gap-2'>
                <img src={logo} alt=""/>
                <span className='text-primary text-2xl'>CodeAnt AI</span>
            </div>

            <NavLinks className={"hidden sm:block"} />
                {
                    navOpen
                    ? (
                        <RxCross2
                            className=' sm:hidden'
                            onClick={()=>setNavOpen(false)}
                        />
                    )
                    : (
                        <GiHamburgerMenu 
                            className=' sm:hidden'
                            onClick={()=>setNavOpen(true)}
                        />
                    )
                }

                {/* Mobile NavLinks */}
                <div className={`absolute top-[2.9rem] left-0 bg-white shadow-xl transition-all duration-300 ease-in-out transform 
                    sm:hidden flex flex-col w-full mt-4 ${
                        navOpen 
                        ? " translate-x-0" 
                        : "-translate-x-full"
                        }`}>
                    <NavLinks className="flex flex-col" />
                </div>
        </div>
    )
}