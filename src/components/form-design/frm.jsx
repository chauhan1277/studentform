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
    const [studentList, setStudentList] = useState([]);

    const handlesubmitdeatails =  (e)=>{

        e.preventDefault();
        setStudentList([...studentList, details]);
        setDetails({
            username: "",
            fathername: "",
            rollno: "",
            studentemail: "",
            studentnumber: "",
        });
    };
    // const [data, setData ] = useState('')
    
   
    // const handlesubmitdeatails =  (e)=>{
    //     e.preventDefault();

    //      console.log(details)

    //     //  data([...studentList, details]);
        
        

    // }
    // const showdata =()=>{
    // //    setData(details)
    //    setDetails([...studentList, details]);
       
    // }  
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
                                <button className="addvalue" type="submit">Submit</button>
                                {/* <button className="addvalue" type="submit" onClick={showdata}>Submit</button> */}
                            </fieldset>

                        </form>
                    </div>
                </div>
                <div className="output-box">
                    <div className="lst">
                        <table border="1"  className="output-table">
                            <thead>
                                <tr >
                                    <th>Student Name</th>
                                    <th>Father Name</th>
                                    <th>Roll No.</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentList.length === 0 ? (
                                    <tr><td colSpan="5" style={{ textAlign: "center" }}>No data submitted yet</td></tr>
                                ) : (
                                    studentList.map((student, index) => (
                                        <tr key={index}>
                                            <td>{student.username}</td>
                                            <td>{student.fathername}</td>
                                            <td>{student.rollno}</td>
                                            <td>{student.studentemail}</td>
                                            <td>{student.studentnumber}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Frm;