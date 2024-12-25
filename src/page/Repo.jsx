import { useState } from "react";
import { Repositories } from "../components/Home/Repositories";
import { SideBar } from "../components/Home/SideBar"

export default function RepoPage(){

    const [navOpen,setNavOpen]=useState(false);
      
    return(
        <div className="flex flex-col sm:flex-row min-h-screen">
            <SideBar navOpen={navOpen} setNavOpen={setNavOpen}/>
            <Repositories dimmed={navOpen}/>
        </div>
    )
}

