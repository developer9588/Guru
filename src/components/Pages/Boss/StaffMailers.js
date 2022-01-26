import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";


const StaffMailers = () =>{

    const [inactive,setInactive] = useState(false);

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />

       <OnceHeader heading="Directory & Staff Mailer" />
       <div className="staff-mailer-content">
             <div className="inner-container">
                  <div className="staff-mailer-btn">
                       <button className="staff-btn">Send Email</button>
                       <button className="staff-btn">Send Alert</button>
                  </div>
                  <div className="staff-mailer-table">
                  <table>
                <thead>
                   <tr>
                   <th className="st-bg"><input type="checkbox" className="staff-mailer-check" /></th>
                   <th className="st-bg">Sr. No.</th>
                   <th className="st-bg">Email ID</th>
                   <th className="st-bg">Skpe ID</th>
                   <th className="st-bg">Mobile No.</th>
                   <th className="st-bg">Position</th>
                   </tr>
                </thead>
                <tbody>
                <tr>
                </tr>
                  </tbody>
                </table>
                  </div>
             </div>
       </div>
   </div>
    )
}

export default StaffMailers;

