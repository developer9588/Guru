import React from "react";
import Select from 'react-select';
import { useState } from "react";
import SideMenu from "../../SideMenu/SideMenu";
import OnceHeader from "../OnceHeader";

const Languages = () =>{

    const [inactive,setInactive] = useState(false);
    const data = [
        { value: 100, label: "option 1" },
        { value: 200, label: "option 2" },
        { value: 300, label: "option 3" },
        { value: 400, label: "option 4" },
        { value: 500, label: "option 5" },
        { value: 600, label: "option 6" }
      ];

      const [selectedOption, setSelectedOption] = useState(null);  
        // handle onChange event of the dropdown
      const handleChange = e => {
        setSelectedOption(e);
      }  


    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <OnceHeader heading = "Language" />
       <div className="once-content">
             <div className="once-head">
                 <h2>Add Languages</h2>
                 <button className="show-all-btn"> <span><i class="bi bi-calendar3"></i></span> Show All</button>
             </div>
             <form>
                 <div className="input-field">
                       <div className="select">
                       <div className="time-zone f-b">
                           <label>Language Name</label>
                           <input type="text" placeholder="Language" />
                       </div>
                       <div className="alias f-b">
                           <label>{`Aliases (if any)`}</label>
                           <input type="text" placeholder="Alias"/>
                      </div>
                        <div className="dropdown f-b">
                          <label className="userLabel">Country-used in</label>
                          <Select
                            placeholder="Select Option"
                            value={selectedOption} // set selected value
                            options={data} // set list of the data
                            onChange={handleChange} // assign onChange function
                            className="select"
                          />
                      </div>
                      <div className="btn">
                          <button className="save-btn">Save</button>
                      </div>
                       </div>
                 </div>
             </form>
             <div className="once-search">
                  <h2>Search Language</h2>
                  <form>
                      <div className="onceSearch-input">
                            <label>
                                Search
                            </label>
                            <input type="text" placeholder="Language" />
                            <button className="sr-btn">Search</button>
                      </div>
                  </form>
             </div>


             <div className="once-table">
                  <table>
                    <thead>
                       <tr>
                         <th className="st-bg">S.No</th>
                         <th className="st-bg">Language Name</th>
                         <th className="st-bg">Alias</th>
                         <th className="st-bg">Country-used in</th>
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

export default Languages;