import React from "react";
import { useState } from "react";



const Remainder = () =>{


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
    

    return(
          <div className="inner-container">
                 <div className="add-remainder-btn">
                       <button onClick={toggleModal} className="remainder-btn"><span><i class="bi bi-plus"></i></span>Add New Remainder</button>
                       {
                    modal && (
                      <div className="remainder-mod">
                            <div className="remainder-mod__heading">
                                  <div className="text">
                                        <p>Add Remainder</p>
                                  </div>
                                  <div className="remainder-mod__close-btn">
                                       <button className="modal-close" onClick={toggleModal}><i class="bi bi-x"></i></button>
                                  </div>
                            </div>
                            <div className="inner-container">
                                  <div className="remainder-form">
                                        <form>
                                               <div className="remainder-inp">
                                                    <label>Text</label>
                                                    <textarea className="remainder-i"  cols="30" rows="10" placeholder="Write your reminder here "></textarea>
                                               </div>
                                               <div className="remainder-inp">
                                                      <label>Date & Time</label>
                                                      <input className="remainder-i" type="text" placeholder="Date & Time" />
                                               </div>
                                               <div className="remainder-mod-btn">
                                                      <button className="remainder-b">Save</button>
                                               </div>
                                        </form>
                                  </div>
                            </div>
                      </div>
                    )
                  }
                 </div>
                <div className="remainder__tabel">
                      <table>
                      <thead>
                   <tr>
                   <th className="st-bg">S. No.</th>
                   <th className="st-bg">Text</th>
                   <th className="st-bg">Date & Time</th>
                   <th className="st-bg">Action</th>

                   </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  </tr>
                  <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  </tr>
                  <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  </tr>
                  </tbody>
                </table>
                </div>
          </div>
    )
}

export default Remainder;