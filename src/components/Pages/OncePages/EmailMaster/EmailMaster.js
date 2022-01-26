import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";

const EmailMaster = () =>{

    const [inactive,setInactive] = useState(false);
    
    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Outgoing Email Master" />
       <div className="once-content currency">
             <div className="once-head">
                 <h2>Search Master Email</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <div className="once-search">
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input type="text" placeholder="Master Email" />
                            <button className="sr-btn">Search</button>
                      </div>
                  </form>
             </div>


             <div className="once-table">
                  <table>
                    <thead>
                       <tr>
                         <th className="st-bg">S.No</th>
                         <th className="st-bg">Master Email ID</th>
                         <th className="st-bg">SMTP</th>
                         <th className="st-bg">Port No.</th>
                         <th className="st-bg">Default</th>
                         <th className="st-bg">Action</th>
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
    )
}

export default EmailMaster;