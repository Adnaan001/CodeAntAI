import { FiRefreshCw } from "react-icons/fi";
import { RiAddLargeFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { BsDatabase } from "react-icons/bs";
import { useState } from "react";

export const Repositories=({dimmed})=>{
    const projects=[
        {
          name: "design-system",
          visibility: "Public",
          technology: "React",
          size: "7320 KB",
          lastUpdated: "1 day ago"
        },
        {
          name: "codeant-ci-app",
          visibility: "Private",
          technology: "Javascript",
          size: "5871 KB",
          lastUpdated: "2 days ago"
        },
        {
          name: "analytics-dashboard",
          visibility: "Private",
          technology: "Python",
          size: "4521 KB",
          lastUpdated: "5 days ago"
        },
        {
          name: "mobile-app",
          visibility: "Public",
          technology: "Swift",
          size: "3096 KB",
          lastUpdated: "3 days ago"
        },
        {
          name: "e-commerce-platform",
          visibility: "Private",
          technology: "Java",
          size: "6210 KB",
          lastUpdated: "6 days ago"
        },
        {
          name: "blog-website",
          visibility: "Public",
          technology: "HTML/CSS",
          size: "1876 KB",
          lastUpdated: "4 days ago"
        },
        {
          name: "social-network",
          visibility: "Private",
          technology: "PHP",
          size: "5432 KB",
          lastUpdated: "7 days ago"
        }
      ];

      const [selected,setSelected]=useState("codeant-ci-app");
    return(
        <div
            className={`sm:m-4 bg-white rounded-md w-full shadow-sm ${
                dimmed
                && "bg-opacity-0 pointer-events-none"
            }`}
        >
            {/* Section-1 */}
            <div
                className="p-4"
            >
                <div
                    className="flex flex-col sm:flex-row gap-4 sm:justify-between "
                >
                    <div>
                        <h1 className="text-primary text-2xl font-semibold">Repositories</h1>
                        <p className="text-sm text-nav">33 total repositories</p>
                    </div>
                    <div
                        className="flex gap-2 items-center"
                    >
                        <button
                            className="flex items-center text-sm text-nav px-4 py-2 gap-2 border border-gray-300 rounded-md"
                        >
                            <FiRefreshCw/>
                            Refresh All
                        </button>
                        <button
                            className="flex items-center px-4 py-2 bg-button text-white gap-1 text-sm rounded-md"
                        >
                            <RiAddLargeFill/>
                            <span>Add Repository</span>
                        </button>
                    </div>
                </div>
                <div
                    className="relative text-nav mt-4"
                >
                    <input 
                        type="text"
                        name="search"
                        placeholder="Search Repositories" 
                        className="text-nav px-4 py-2 border border-gray-300 rounded-md pl-8"
                    />
                    <IoSearchOutline className="absolute top-[9.5px] text-nav left-2" size={20}/>
                </div>
            </div>

            {/* Section-2 */}
            <div>
                {
                    projects.map((data,index)=>(
                        <div
                            key={index}
                            className={`p-4 border-t border-gray-200 ${selected===data.name && "bg-gray-100"}`}
                            onClick={()=>setSelected(data.name)}
                        >
                            <div className="flex gap-2">
                                <p
                                    className="text-primary font-medium text-lg"
                                >
                                    {data.name}
                                </p>
                                <span
                                    className="text-myblue-300 px-2 pt-1 h-6 text-xs rounded-full bg-myblue-100 border border-myblue-200"
                                >
                                    {data.visibility}
                                </span>
                            </div>
                            <div className="flex gap-4 text-primary text-sm mt-2">
                                <p className="flex items-center gap-2">
                                    {data.technology} 
                                    <span className="bg-button rounded-full w-2 h-2"></span>
                                </p>
                                <p className="flex gap-1 items-center">
                                    <BsDatabase/>
                                    {data.size}
                                </p>
                                <p>
                                    Updated {data.lastUpdated}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}