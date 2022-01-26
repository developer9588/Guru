import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import Select from 'react-select';


const SpCost = () =>{



    const [modal,setModal] = useState(false);

    const toggleModal = () =>{
      setModal(!modal)
      console.log('click')
    }

    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
  

    const data = [
        { value: 100, label: "option 1" },
        { value: 200, label: "option 2" },
        { value: 300, label: "option 3" },
        { value: 400, label: "option 4" },
        { value: 500, label: "option 5" },
        { value: 600, label: "option 6" }
      ];


    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = e => {
        setSelectedOption(e);
    }  
    


    const [inactive,setInactive] = useState(false);

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />
       <div className="line"></div>
       <div className="inner-container">
       <div className="sp-buttons">
             <div className="create-btn">
                   <button className="sp-create" onClick={toggleModal}><span className="sp-icon"><i class="bi bi-plus"></i></span>Create Selling</button>
                   {
                    modal && (
                      <div className="cost-mod">
                            <div className="cost-mod__heading">
                                  <div className="text">
                                        <p>Create Selling</p>
                                  </div>
                                  <div className="cost-mod__close-btn">
                                       <button className="modal-close" onClick={toggleModal}><i class="bi bi-x"></i></button>
                                  </div>
                            </div>
                            <div className="cost-mod__form">
                                  <form>
                                       <p>{`(For adding multiple rows via file upload)`}</p>
                                       <div className="cost-mod__input">
                                            <div className="cost-mod__inp">
                                                  <label>Work Type</label>
                                                  <select className="search-select">
                                                           <option value="australia">Australia</option>
                                                           <option value="canada">Canada</option>
                                                            <option value="usa">USA</option>
                                                    </select>
                                            </div>
                                            <div className="cost-mod__inp">
                                                  <label>Select File</label>
                                                  <input type="file" className="cost-mod__file-inp" />
                                            </div>
                                            <div className="cost-mod__inp">
                                                 <button className="cost-mod__btn">Upload</button>
                                            </div>
                                       </div>
                                  </form>
                            </div>
                            {/* Adding Single row */}
                            <div className="cost-mod__form">
                                  <form>
                                       <p>{`(For adding single row)`}</p>
                                       <div className="cost-mod__input">
                                            <div className="cost-mod__inp">
                                                  <label>Work Type</label>
                                                  <select className="search-select">
                                                           <option value="australia">Australia</option>
                                                           <option value="canada">Canada</option>
                                                            <option value="usa">USA</option>
                                                    </select>
                                            </div>
                                            <div className="cost-mod__inp">
                                                  <label>Select Language</label>
                                                  <select className="search-select">
                                                          <option value="australia">Australia</option>
                                                          <option value="canada">Canada</option>
                                                          <option value="usa">USA</option>
                                                  </select>
                                            </div>
                                            <div className="cost-mod__inp">
                                                  <label>Target Language</label>
                                                  <select className="search-select">
                                                          <option value="australia">Australia</option>
                                                          <option value="canada">Canada</option>
                                                          <option value="usa">USA</option>
                                                  </select>
                                            </div>

                                            <div className="cost-mod__inp">
                                                  <label>SP INR</label>
                                                  <input type="text" placeholder="SP INR" />
                                            </div>
                                            <div className="cost-mod__inp">
                                                  <label>SP USD</label>
                                                  <input type="text" placeholder="SP USD" />
                                            </div>

                                            <div className="cost-mod__inp">
                                                  <label>Strength</label>
                                                  <input type="text" placeholder="Strength" />
                                            </div>

                                            <div className="cost-mod__inp">
                                                  <label>Fixed</label>
                                                  <input type="text" placeholder="Fixed" />
                                            </div>

                                            <div className="cost-mod__inp">
                                                 <button className="cost-mod__btn">Save</button>
                                            </div>
                                       </div>
                                  </form>
                            </div>
                      </div>
                    )
                  }
             </div>
             <div className="delete-export">
                   <button className="sp-clear"><span className="sp-icon"><i class="bi bi-trash"></i></span> Clear Complete list</button>
                   <button className="sp-export">Export</button>
             </div>
       </div>
       <form class="form-inline" action="/action_page.php">
             <label>Source</label>
             <Select
                placeholder="Select Option"
                value={selectedOption} // set selected value
                options={data} // set list of the data
                onChange={handleChange} // assign onChange function
                className="select sp-select"
            />
             <label>Target</label>
             <Select
                placeholder="Select Option"
                value={selectedOption} // set selected value
                options={data} // set list of the data
                onChange={handleChange} // assign onChange function
                className="select sp-select"
            />
             <label>Work Type</label>
             <Select
                placeholder="Select Option"
                value={selectedOption} // set selected value
                options={data} // set list of the data
                onChange={handleChange} // assign onChange function
                className="select sp-select"
            />
             <button className="sp-btn"><span className="sp-search-icon"><i class="bi bi-search"></i></span> Search</button>
             </form>

             <div className="selfTask-table sp-table">
                  <div className="overflow-table">
                       <table className="selfTask-table-data">
                              <thead>
                                <tr>
                                <th className="st-bg">S. No.</th>
                                <th className="st-bg">Source</th>
                                <th className="st-bg">Target</th>
                                <th className="st-bg">Cost</th>
                                <th className="st-bg">SP INR</th>
                                <th className="st-bg">SP USD</th>
                                <th className="st-bg">Strength</th>
                                <th className="st-bg">Fixed</th>
                                <th className="st-bg">Action</th>
                                </tr>
                              </thead>

                              <tbody>
                              </tbody>
                        </table>
                      </div>
                 </div>

           </div>
       </div>
    )
}

export default SpCost;
