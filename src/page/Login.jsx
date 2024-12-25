import subtract from '../assets/Subtract.png'
import logo from '../assets/logo.png'
import pie from '../assets/pie-chart.png'
import { IoMdArrowRoundUp } from "react-icons/io";
import { LoginPage } from '../components/Auth/Login';

export default function Login(){
    const data=[
        {
            key:"30+",
            value:"Language Support"
        },
        {
            key: "10K+",
            value: "Developers"
        },
        {
            key: "100K+",
            value: "Hours Saved"
        }
    ]
    return(
        <div
            className="flex w-full h-screen"
        >
            <div
                className="hidden sm:flex flex-col items-center justify-center relative w-1/2 
                h-full bg-white border-r border-gray-200"            
            >
                <div className='rounded-2xl shadow-[1px_1px_25px_#d1d5db] bg-white min-w-[50%] mx-4'>
                    <div className=' flex items-center gap-2 p-4 border-b border-gray-300'>
                        <img src={logo} alt="" width={28} />
                        <p className='text-secondary font-semibold'>AI to Detect & Autofix Bad Code</p>
                    </div>
                    <div className='p-4 flex gap-4 lg:justify-between'>
                        {
                            data.map((data,index)=>(
                                <div key={index} className='py-1 text-center'>
                                    <p className='text-secondary font-bold'>{data.key}</p>
                                    <p className='text-auth text-sm'>{data.value}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-4 rounded-2xl shadow-[1px_1px_25px_#d1d5db] -mt-2 px-6 py-4 ml-[12.5rem] mr-3 bg-white min-w-[28%]'>
                    <div className='flex items-center gap-4 lg:justify-between'>
                        <img src={pie} alt="" className='bg-[#9c90fa48] w-[38px] rounded-full p-2'/>
                        <div>
                            <div className='text-myblue-400 font-bold text-sm flex items-center gap-1'>
                                <IoMdArrowRoundUp/>
                                <span>14%</span>
                            </div>
                            <p className='text-xs text-center'>This Week</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xs font-bold'>Issues Fixed</p>
                        <p className='text-2xl font-bold'>500K+</p>
                    </div>
                </div>

                <img src={subtract} alt="" width={230} className='absolute bottom-0 left-0'/>
            </div>
            <LoginPage/>
        </div>
    )
}