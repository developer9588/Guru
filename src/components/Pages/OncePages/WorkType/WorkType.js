import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";

const WorkType = () =>{

    const [inactive,setInactive] = useState(false);
    
    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Work Type" />
       <div className="once-content currency">
             <div className="once-head">
                 <h2>Add Work Type</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <form>
                <div className="measure">
                     <div className="measure-inp">
                           <label>Work Type Name</label>
                           <input type="text" placeholder="Work Type" />
                           <button className="save-btn">Save</button>
                     </div>
                </div>
             </form>
             <div className="once-search">
                  <h2>Search Work Type</h2>
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input type="text" placeholder="Work Type" />
                            <button className="sr-btn">Search</button>
                      </div>
                  </form>
             </div>


             <div className="once-table">
                  <table>
                    <thead>
                       <tr>
                         <th className="st-bg">S.No</th>
                         <th className="st-bg">Work Type Name</th>
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

export default WorkType;