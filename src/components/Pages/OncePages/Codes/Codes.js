import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";

const Codes = () =>{

    const [inactive,setInactive] = useState(false);
    
    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Codes" />
       <div className="once-content currency">
             <div className="once-head">
                 <h2>Add Codes</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <form>
             <div className="input-field">
                  <div className="select">
                       <div className="alias f-b">
                           <label>Codes Name</label>
                           <input type="text" placeholder="Codes"/>
                      </div>
                      <div className="time-zone f-b">
                           <label>Code Defined as</label>
                           <input type="text" placeholder="Defined as" />
                       </div>
                      <div className="btn">
                          <button className="save-btn">Save</button>
                      </div>
                       </div>
                 </div>
             </form>
             <div className="once-search">
                  <h2>Search Codes</h2>
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input type="text" placeholder="Codes" />
                            <button className="sr-btn">Search</button>
                      </div>
                  </form>
             </div>


             <div className="once-table">
                  <table>
                    <thead>
                       <tr>
                         <th className="st-bg">S.No</th>
                         <th className="st-bg">Status Name</th>
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

export default Codes;