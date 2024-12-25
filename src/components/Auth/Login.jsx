import { useState } from "react"
import logo from '../../assets/logo.png'
import { IoLogoGithub } from "react-icons/io";
import { FaBitbucket } from "react-icons/fa6";
import { VscAzureDevops } from "react-icons/vsc";
import { FaGitlab } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export const LoginPage=()=>{
    
    const signInOptions = [
        {
          id: 1,
          name: "Sign in with Github",
          icon: <IoLogoGithub size={24}/>
        },
        {
          id: 2,
          name: "Sign in with Bitbucket",
          icon: <FaBitbucket size={18} color="#2684ff"/>
        },
        {
          id: 3,
          name: "Sign in with Azure Devops",
          icon: <VscAzureDevops size={24} color="#1458b1"/>
        },
        {
          id: 4,
          name: "Sign in with GitLab",
          icon: <FaGitlab size={24} color="#FC6D26"/>
        },
      ];
      
    const [accountType,setAccountType]=useState("SAAS");
    const navigate =useNavigate()

    function changeHandler(type){
        console.log("chage handler called")
        setAccountType(type);
    }

    return(
        <div className="w-full sm:w-[50%] h-fit my-auto">
            <div
                className="bg-white mx-6 h-full rounded-md border border-gray-200 shadow-sm"
            >
                <div className=" flex flex-col justify-center items-center px-4 py-4 border-b border-gray-300">
                    <div className='flex items-center gap-2 mb-4'>
                        <img src={logo} alt=""/>
                        <span className='text-primary text-2xl'>CodeAnt AI</span>
                    </div>
                    <p className="text-primary fotn-bold text-xl sm:text-3xl my-4 font-bold">Welcome to CodeAnt AI</p>
                    <div className="my-4 bg-gray-100 w-full rounded-md border border-gray-200 flex justify-center">
                        <input
                            type="radio"
                            name="accountType" 
                            id="SAAS"
                            value={"SAAS"}
                            className="hidden"
                            checked={accountType==="SAAS"}
                            onChange={()=>changeHandler("SAAS")}
                        />
                        <label
                            htmlFor="SAAS"
                            className={`flex-1 text-center px-6 py-3 rounded-lg cursor-pointer 
                                transition-all duration-300 font-semibold
                                ${
                                    accountType==="SAAS" 
                                    ? "bg-button text-white"
                                    : "text-nav"
                                }`}
                        >
                            SAAS
                        </label>
                        {/* ------- */}
                        <input 
                            type="radio" 
                            name="accountType" 
                            id="selfHosted"
                            value={"Self Hosted"}
                            className="hidden"
                            checked={accountType==="Self Hosted"}
                            onChange={()=>changeHandler("Self Hosted")}
                        />
                        <label 
                            htmlFor="selfHosted"
                            className={`flex-1 text-center p-6 py-3 rounded-lg cursor-pointer 
                                transition-all duration-300 font-semibold 
                                ${
                                    accountType==="Self Hosted" 
                                    ? "bg-button text-white"
                                    : "text-nav"
                                }`}
                        >
                            Self Hosted
                        </label>
                    </div>
                </div>
                <div className="flex flex-col items-center py-6 gap-4">
                    {
                        signInOptions.map((option) => (
                            <button
                                key={option.id}
                                className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-md 
                                shadow-sm w-[90%] sm:w-[60%] hover:bg-gray-100 transition justify-center"
                                onClick={()=>navigate('/repositories')}
                            >
                            {option.icon}
                            <span className="text-primary font-medium">{option.name}</span>
                            </button>
                        ))
                    }
                </div>
            </div>
            <p className="text-primary text-sm text-center my-6">By signing up you agree to the <span className="font-bold">Privacy Policy.</span></p>
        </div>
    )
} 