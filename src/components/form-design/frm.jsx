import React, { useEffect, useState } from "react";
import './frm.css';

const Frm =()=>{
    const [details, setDetails] = useState({
        username: "",
        fathername: "",
        rollno: "",
        studentemail: "",
        studentnumber: "",
    })
    const [data, setData ] = useState('')
    
   
    const handlesubmitdeatails =  (e)=>{
        e.preventDefault();

         console.log(details)
        
        



    }
    const showdata =()=>{
       setData(details)
    }
    

   
        


    
        
    return (
        <>
            <div className="parent">
                <div className="input-box">
                    <div className="container">
                        <form onSubmit={handlesubmitdeatails}>
                            <fieldset>
                                <legend>Student Details</legend>
                                <br /><br />
                                <label>Student Name:
                                <input className="st" value={details.username} onChange={(e)=>setDetails({...details,username:e.target.value})} type="text" name="username" id="username" maxlength="10"></input>
                                </label>
                                <br /><br />
                                <label>Father Name:
                                    <input className="st" value={details.fathername} onChange={(e)=>setDetails({...details,fathername:e.target.value})} type="text" name="fathername" id="fathername" maxlength="10"></input>
                                </label>
                                <br /><br />
                                <label>Roll No.:
                                    <input className="st" value={details.rollno} onChange={(e)=>setDetails({...details,rollno:e.target.value})} type="number" name="rollno" id="rno" maxlength="2"></input>
                                </label>
                                <br /><br />
                                <label>Student Email:
                                    <input className="st" value={details.studentemail} onChange={(e)=>setDetails({...details,studentemail:e.target.value})} type="email" name="studentemail" id="studentemail" required></input>
                                </label>
                                <br /><br />
                                <label>Contact Number:
                                    <input className="st" value={details.studentnumber} onChange={(e)=>setDetails({...details,studentnumber:e.target.value})} type="number" step="0.5" name="studentnumber" id="studentnumber"></input>
                                </label>
                                <button className="addvalue" type="submit" onClick={showdata}>Submit</button>
                            </fieldset>

                        </form>
                    </div>
                </div>
                <div className="output-box">
                 <h2>{data.username}</h2>
                 <h2>{data.fathername}</h2>
                 <h2>{data.rollno}</h2>
                </div>
            </div>
        </>
    )
}
export default Frm;