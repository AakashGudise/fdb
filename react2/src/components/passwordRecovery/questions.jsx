
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Questions() {
    const [inpval, setInpval] = useState({
        email: "",
        sname: "",
        ffriend: "",
        fdish: "",
        fcolor: "",
        fsong: ""
    });
    // const [password, setPassword] = useState(""); // State to store the password
    const history = useNavigate();

    const setVal = (e) => {
        const { name, value } = e.target;
        
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
        // setInpval(prevState => ({
        //     ...prevState,
        //     [name]: value
        // }));
    };

    const verifyQuestions = async (e) => {
        e.preventDefault();
        const { email, sname, ffriend, fdish, fcolor, fsong } = inpval;

        try {
            const response = await fetch("http://localhost:5001/security", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, sname, ffriend, fdish, fcolor, fsong
                    // console.log("sname")
                })
            });

            const data = await response.json();

            if (response.ok) {
                // Check if password property exists in the response
                if (data.message === "Security questions verified successfully!") {
                    // Navigate to /dash page upon successful verification
                    history('/dash');
                } else {
                    // Handle case where security questions are not verified
                    toast.error("Unable to verify security questions.....");
                }
            } else {
                // Handle non-200 status codes
                toast.error("Unable to verify security questions.");
            }

            // Clear the input fields
            setInpval({ ...inpval, email: "", sname: "", ffriend: "", fdish: "", fcolor: "", fsong: "" });
        } catch (error) {
            console.error("Error:", error);
            // Handle error
            toast.error("An error occurred while verifying security questions.");
        }
    };

    return (
        <div>
            <div className='d-flex vh-100  justify-content-center align-item-center'>
                <form onSubmit={verifyQuestions} className='form  w-50'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div className='container'>
                        <div>
                            <h3 style={{ alignItems: "center" }}>Security Questions</h3>
                        </div>
                        <div className="form_input">
                             <div className=''>
                                 <label>Email : </label>
                             </div>
                             <div>
                                 <input type="email" value={inpval.email} onChange={setVal} name="email" id="email"
                                    placeholder='Enter Your Email Address' className='form-control' />
                            </div>
                        </div>
                        <div className="form_input">
                            <div>
                                <label>What is your School name:</label>
                            </div>
                            <div>
                                <input type='text' placeholder='Enter your Answer' className='form-control'
                                    value={inpval.sname} onChange={setVal} name="sname" id="sname" ></input>
                            </div>
                        </div>
                        <div className="form_input">
                            <div>
                                <label>who was your first Friend:</label>
                            </div>
                            <div>
                                <input type='text' placeholder='Enter your Answer' className='form-control'
                                    value={inpval.ffriend} onChange={setVal} name="ffriend" id="ffriend" ></input>
                            </div>
                        </div>
                        <div className="form_input">
                            <div>
                                <label>What is your favourite Dish:</label>
                            </div>
                            <div>
                                <input type='text' placeholder='Enter your Answer' className='form-control'
                                    value={inpval.fdish} onChange={setVal} name="fdish" id="fdish" ></input>
                            </div>
                        </div>
                        <div className="form_input">
                            <div>
                                <label>What is your favourite color:</label>
                            </div>
                            <div>
                                <input type='text' placeholder='Enter your Answer' className='form-control'
                                    value={inpval.fcolor} onChange={setVal} name="fcolor" id="fcolor" ></input>
                            </div>
                        </div>
                        <div className="form_input">
                            <div>
                                <label>What is your Favourate Song:</label>
                            </div>
                            <div>
                                <input type='text' placeholder='Enter your Answer' className='form-control'
                                    value={inpval.fsong} onChange={setVal} name="fsong" id="fsong" ></input>
                            </div>
                        </div>

                        <br></br>

                        <div>
                            <button className='btn btn-success'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}
