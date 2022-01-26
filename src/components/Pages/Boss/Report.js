import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";

const Report = () =>{

    const [inactive,setInactive] = useState(false);

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading="Report" />
       <div className="inner-container">
           <div className="report-form">
                 <form>
                     <div className="report-form-content report-grid">
                           <div className="report-c">
                                 <div className="report-input">
                                       <label>Client</label>
                                       <input type="text" />
                                  </div>
                                  <div className="report-input">
                                       <label>From</label>
                                       <input type="date" />
                                  </div>
                                  <div className="report-input">
                                       <label>To</label>
                                       <input type="date" />
                                  </div>
                            </div>
                            <div className="report-c">
                                  <div className="report-input">
                                        <label>Translator</label>
                                        <input type="text" />
                                  </div>
                                  <div className="report-input">
                                        <label>Source Language</label>
                                        <select name="Select Category">
                                              <option value="volvo">Active</option>
                                              <option value="saab">Saab</option>
                                              <option value="mercedes">Mercedes</option>
                                              <option value="audi">Audi</option>
                                        </select>
                                  </div>
                                  <div className="report-input">
                                        <label>Target Language</label>
                                        <select name="Select Category">
                                              <option value="volvo">Active</option>
                                              <option value="saab">Saab</option>
                                              <option value="mercedes">Mercedes</option>
                                              <option value="audi">Audi</option>
                                        </select>
                                  </div>
                                  
                            </div>

                            <div className="report-c">
                                  <div className="report-input">
                                        <label>User Select</label>
                                        <select name="Select Category">
                                              <option value="volvo">Active</option>
                                              <option value="saab">Saab</option>
                                              <option value="mercedes">Mercedes</option>
                                              <option value="audi">Audi</option>
                                        </select>
                                  </div>
                                  <div className="report-input">
                                        <label>Work Type</label>
                                        <select name="Select Category">
                                              <option value="volvo">Active</option>
                                              <option value="saab">Saab</option>
                                              <option value="mercedes">Mercedes</option>
                                              <option value="audi">Audi</option>
                                        </select>
                                  </div>

                                  <div className="report-input">
                                        <label>Country</label>
                                        <select name="Select Category">
                                              <option value="volvo">Active</option>
                                              <option value="saab">Saab</option>
                                              <option value="mercedes">Mercedes</option>
                                              <option value="audi">Audi</option>
                                        </select>
                                  </div>
                                  
                            </div>

                            
                            <div className="report-c">
                                  <div className="report-input">
                                        <label>Report Type</label>
                                        <select name="Select Category">
                                              <option value="volvo">Active</option>
                                              <option value="saab">Saab</option>
                                              <option value="mercedes">Mercedes</option>
                                              <option value="audi">Audi</option>
                                        </select>
                                  </div>
                                  <div className="report-input">
                                        <label>Our Company</label>
                                        <select name="Select Category">
                                              <option value="volvo">Active</option>
                                              <option value="saab">Saab</option>
                                              <option value="mercedes">Mercedes</option>
                                              <option value="audi">Audi</option>
                                        </select>
                                  </div>

                                  <div className="report-input">
                                        <label>Option Type</label>
                                        <select name="Select Category">
                                              <option value="volvo">Active</option>
                                              <option value="saab">Saab</option>
                                              <option value="mercedes">Mercedes</option>
                                              <option value="audi">Audi</option>
                                        </select>
                                  </div>
                                  
                            </div>
                     </div>
                     <div className="report-btn">
                                  <div className="show-report-btn">
                                        <button className="show-r">Show Report</button>
                                  </div>
                                  <div className="view-btn">
                                         <div className="v-btn">
                                         <button className="v-list">View List</button>
                                         <button className="v-list">Export List</button>
                                         </div>
                                  </div>
                            </div>
                 </form>
           </div>
       </div>
   </div>
    )
}

export default Report;

