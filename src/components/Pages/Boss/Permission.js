import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";

const Permission = () =>{

    const [inactive,setInactive] = useState(false);

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading="Permission" />

       <div className="inner-container">
             <div className="permission-form">
                   <form>
                        <div className="user">
                             <label className="user-label">Users</label>
                             <select id="country" name="country" className="user-select">
                              <option value="australia">Australia</option>
                              <option value="canada">Canada</option>
                              <option value="usa">USA</option>
                             </select>
                        </div>
                        <div className="user-checkbox">
                              <div className="wasp-check">
                                    <ul>
                                        <p> <input className="permission-check" type="checkbox" />Wasp</p>
                                        <li><input className="permission-check" type="checkbox" />Quick Add Client</li>
                                        <li><input className="permission-check" type="checkbox" />Tact Translator - White Zone</li>
                                        <li><input className="permission-check" type="checkbox" />Allow Work Zone For Tack Translator</li>
                                        <li><input className="permission-check" type="checkbox" />Allow As Quality Checker</li>
                                    </ul>
                              </div>

                              <div className="cost-check">
                                    <ul>
                                        <p> <input className="permission-check" type="checkbox" />Cost</p>
                                        <li><input className="permission-check" type="checkbox" />Allow view SP & Cost</li>
                                        <li><input className="permission-check" type="checkbox" />Allow edit SP & Cost</li>
                                        <li><input className="permission-check" type="checkbox" />Delete Language Pair </li>
                                        <li><input className="permission-check" type="checkbox" />Allow create selling</li>
                                        <li><input className="permission-check" type="checkbox" />Allow export price list</li>
                                        <li><input className="permission-check" type="checkbox" />Clear complete list</li>
                                        <li><input className="permission-check" type="checkbox" />Checker</li>
                                        <li><input className="permission-check" type="checkbox" />Allow edit checker</li>
                                        <li><input className="permission-check" type="checkbox" />Re Checker</li>
                                        <li><input className="permission-check" type="checkbox" />Allow edit rechecker</li>
                                        <li><input className="permission-check" type="checkbox" />Archive</li>
                                    </ul>
                              </div>

                              <div className="once-check">
                                    <ul>
                                        <p> <input className="permission-check" type="checkbox" />Once</p>
                                        <li><input className="permission-check" type="checkbox" />Allow Edit Once</li>
                                        <li><input className="permission-check" type="checkbox" />Allow Delete Once</li>
                                        <li><input className="permission-check" type="checkbox" />Country
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Languages
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Measure
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Work Type
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Category
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Status
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Codes
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Outgoing Email Master
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Our Company
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Domain
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>
                                    </ul>
                              </div>

                              <div className="task-check">
                                    <ul>
                                        <p> <input className="permission-check" type="checkbox" />Task</p>
                                        <li><input className="permission-check" type="checkbox" />Task - View Other Task</li>
                                        <li><input className="permission-check" type="checkbox" />Approval for client</li>
                                        <li><input className="permission-check" type="checkbox" />Approval for Translator </li>
                                        <li><input className="permission-check" type="checkbox" />Approval for Project</li>
                                    </ul>
                              </div>

                              <div className="tact-check">
                                    <ul>
                                        <p> <input className="permission-check" type="checkbox" />Tact</p>
                                        <li><input className="permission-check" type="checkbox" />Import & Export Tact</li>
                                        <li><input className="permission-check" type="checkbox" />Allow Tact Import</li>
                                        <li><input className="permission-check" type="checkbox" />Allow Tact Export </li>
                                        <li><input className="permission-check" type="checkbox" />Search Tact</li>
                                        <li><input className="permission-check" type="checkbox" />Add Tact</li>
                                    </ul>
                              </div>

                              <div className="boss-check">
                                    <ul>
                                    <p> <input className="permission-check" type="checkbox" />Boss</p>
                                        <li><input className="permission-check" type="checkbox" />User Directory
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Our Company & Stationary
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Staff Mailers & Alert
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Permission
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Reports
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Backup & Restore
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Codes
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Outgoing Email Master
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Our Company
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>

                                         <li><input className="permission-check" type="checkbox" />Domain
                                             <ul>
                                                 <li><input className="permission-check" type="checkbox" />Allow Edit <input className="permission-check" type="checkbox" />Allow Delete </li>
                                             </ul>
                                         </li>
                                    </ul>
                              </div>

                              <div className="tact-check">
                                    <ul>
                                        <span>Languages</span>
                                        <li><input className="permission-check" type="checkbox" />Import & Export Tact</li>
                                        <li><input className="permission-check" type="checkbox" />Allow Tact Import</li>
                                        <li><input className="permission-check" type="checkbox" />Allow Tact Export </li>
                                        <li><input className="permission-check" type="checkbox" />Search Tact</li>
                                        <li><input className="permission-check" type="checkbox" />Add Tact</li>
                                        <li className="language-sec"> <label> {`User CC (Email Id)`} </label> <input type="text" className="language-inp" placeholder={`User CC (Email Id)`} /> </li>
                                    </ul>
                              </div>

                          </div>    
                   </form>
             </div>
       </div>
   </div>
    )
}

export default Permission;
