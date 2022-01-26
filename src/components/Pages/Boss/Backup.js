import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";


const Backup = () =>{

    const [inactive,setInactive] = useState(false);

    const [hide,setHide] = useState(false);


    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading="Backup and Restore" />
       <div className="inner-container">
            <div className="backup-content">
                  <div className="restore">
                       <h2>Restore</h2>
                       <div className="restore-content">
                             <div className="restore-choose">
                                  <label>Browse File</label>
                                  <input type="file" className="r-choose" />
                                  <div className="restore-btn">
                                       <button className="backup-btn">Restore</button>
                                  </div>
                             </div>
                       </div>
                  </div>
                  <div className="backup">
                       <h2>Backup</h2>
                       <div className="backup-content">
                             {
                                 hide ? <p className="backup-text">DB Backup is in Progress !!</p> : null
                             }
                            <button className={`backup-btn back-w ${hide ? 'btn-display' : ''} `} onClick={()=>setHide(true)}>Back Up</button>
                       </div>
                  </div>
            </div>
       </div>
   </div>
    )
}

export default Backup;
