import React from "react";
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";

const Currency = () =>{

    const [inactive,setInactive] = useState(false);

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Currency" />
       <div className="once-content currency">
             <div className="once-head">
                 <h2>Add Currency</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <form>
                 <div className="input-field">
                       <div className="select">
                       <div className="time-zone f-b">
                           <label>Currency Name</label>
                           <input type="text" placeholder="Currency" />
                       </div>
                       <div className="alias f-b">
                           <label>{`Aliases (if any)`}</label>
                           <input type="text" placeholder="Alias"/>
                      </div>
                      <div className="time-zone f-b">
                           <label>Currency Symbol</label>
                           <input type="text" placeholder="Currency" />
                       </div>
                        <div className="Choose-file">
                          <input type="file"className="choose" ></input>
                      </div>
                      <div className="btn">
                          <button className="save-btn curr-btn">Save</button>
                      </div>
                       </div>
                 </div>
             </form>
             <div className="once-search">
                  <h2>Search Currency</h2>
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input type="text" placeholder="Currency" />
                            <button className="sr-btn">Search</button>
                      </div>
                  </form>
             </div>


             <div className="once-table">
                  <table>
                    <thead>
                       <tr>
                         <th className="st-bg">S.No</th>
                         <th className="st-bg">Currency Name</th>
                         <th className="st-bg">Alias</th>
                         <th className="st-bg">Symbol</th>
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

export default Currency;