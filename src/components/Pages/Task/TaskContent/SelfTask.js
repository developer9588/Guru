import React from "react";
import { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import selfTaskData  from '../../../../selfTask.json';


const SelfTask = () =>{

    const [searchTerm,setSearchTerm] = useState("")

    const handelSubmit = (e) =>{
      e.preventDefault();
    }



    return(
        <>
            <div className="inner-container">
            <div className="self__task">
                <h2>Search Self Task</h2>
                <div className="search">
                     <form onSubmit={handelSubmit}>
                         <div className="title">
                              <p>Search Self Task</p>
                         </div>
                         <div className="input-field">
                              <input type="text" placeholder="Enter Reference Number" onChange={(e)=>{
                                  setSearchTerm(e.target.value)
                              }}  />
                              <button className="search-btn st-bg-btn">Search</button>
                         </div>
                     </form>
                 </div>
            </div>
            <div className="selfTask-table">
            <p>Total on going query : 0</p>
            <div className="overflow-table">
                <table className="selfTask-table-data">
                 <thead>
                   <tr>
                   <th className="st-bg">#</th>
                   <th className="st-bg">Star/Square</th>
                   <th className="st-bg">Work Status</th>
                   <th className="st-bg">Client/User</th>
                   <th className="st-bg">3 Month Sale</th>
                   <th className="st-bg">Target</th>
                   <th className="st-bg">Translator</th>
                   <th className="st-bg">Translator Mobile Number</th>
                   <th className="st-bg">Refrence.No</th>
                   <th className="st-bg">Delivery Date Time</th>
                   <th className="st-bg">Action</th>
                   </tr>
                </thead>
                <tbody>
                {selfTaskData.filter(val =>{
                       if(searchTerm === ""){
                         return val;
                       }
                       else if(val.Client.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || val.target.toUpperCase().includes(searchTerm.toUpperCase()) ){
                         return val
                       }
                     }).map((m)=> (
                          <tr key={m.id}>
                               <td>{m.id}</td> 
                               <td>{m.translator}</td>
                               <td>{m["Star/Suare"]}</td>
                               <td>{m.Client}</td>
                               <td>{m.monthSale}</td>
                               <td>{m.target}</td>
                               <td>{m.translator}</td>
                               <td>{m.mobileNo}</td>
                               <td>{m.refrenceNo}</td>
                               <td>{m.deliverDate}</td>
                               <td className="action"> 
                                   <ul>
                                        <li className="edit-icon"><i class="bi bi-pencil-square"></i></li>
                                        <li className="delete-icon"><i class="bi bi-trash"></i></li>
                                   </ul> 
                               </td>
                          </tr>
                     ))}
                </tbody>
            </table>
            </div>
            </div>
            </div>
        </>
    )
}

export default SelfTask;