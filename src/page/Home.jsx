import { Link } from "react-router-dom";


export default function Home(){
    return(
        <div className="h-screen flex flex-col justify-center items-center">
            <p className="text-4xl font-bold">Home page</p>
            <div className=" flex flex-col gap-4 mt-12">
                <Link 
                    to={'/login'}
                    className="bg-button p-4 rounded-md shadow-2xl text-white font-bold text-center hover:scale-105"
                >
                    Go To Login Page
                </Link>
                <Link 
                    to={'/repositories'}
                    className="bg-button p-4 rounded-md shadow-2xl text-white font-bold text-center hover:scale-105"
                >
                    Go To Repository Page
                </Link>
            </div>
        </div>
    )
}