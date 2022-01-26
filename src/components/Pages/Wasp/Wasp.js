import React from "react";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import WaspContent from "./WaspContent";
import SideMenu from "../SideMenu/SideMenu";

import waspLogo from '../../../assets/wasp.png';

const Wasp = () =>{

    const [inactive,setInactive] = useState(false)


    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <div className="Wasp">
            <div className="Wasp__header">
                 <div className="logo">
                      <img src={waspLogo} alt="Wasp Logo" />
                 </div>
            </div>
            <div className="Wasp__content">
                 <WaspContent />
            </div>
        </div>
   </div>
    )
}

export default Wasp;