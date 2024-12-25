import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoIosCloudOutline } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";

export const NavLinks=({className})=>{
    const navData=[
        {
            icon: <HiOutlineHome size={22}/>,
            name:"Repositories"
        },
        {
            icon : <IoCodeSlashOutline size={22}/>,
            name:"AI Code review"
        },
        {
            icon: <IoIosCloudOutline size={22}/>,
            name:"Cloud Security"
        },
        {
            icon: <LuBookText size={22}/>,
            name:"How To Use"
        },
        {
            icon: <LuSettings size={22}/>,
            name: "Settings"
        }
    ]

    const [navClick,setNavClick]=useState('Repositories')

    return(
        <div className={`h-[85%] ${className}`}>
            <div 
                className="flex items-center justify-between border border-gray-300 
                rounded-md p-1 shadow-sm my-6"
            >
                <span className="block lg:hidden">UtkarshDhairyaPanwar</span>
                <span className="hidden lg:block truncate">UtkarshDhairyaPa...</span>
                <IoIosArrowDown/>
            </div>
            <div className="flex flex-col justify-normal sm:justify-between h-full ">
                <ul>
                    {
                        navData.map((data,index)=>(
                            <li 
                                key={index}
                                className={`flex gap-2 text-nav items-center font-semibold 
                                    px-4 py-2 rounded-md
                                    ${
                                        navClick===data.name
                                        && " bg-button text-white"
                                    }`}
                                    onClick={()=>{
                                        setNavClick(data.name)
                                    }}
                            >
                                {data.icon}
                                <span>{data.name}</span>
                            </li>
                        ))
                    }
                </ul>
                <ul>
                    <li
                        className={`flex gap-2 text-nav items-center font-semibold 
                            px-4 py-2 rounded-md
                            ${
                                navClick==="Support"
                                && " bg-button text-white"
                            }`}
                            onClick={()=>{
                                setNavClick("Support")
                            }}
                    >
                        <IoCallOutline/>
                        Support
                    </li>
                    <li
                        className={`flex gap-2 text-nav items-center font-semibold 
                            px-4 py-2 rounded-md
                            ${
                                navClick==="Logout"
                                && " bg-button text-white"
                            }`}
                            onClick={()=>{
                                setNavClick("Logout")
                            }}
                    >
                        <FiLogOut/>
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    )
}