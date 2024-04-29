import React, { useState } from 'react'
// import { NavLink } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './mix.css'
import { Link } from 'react-router-dom';
// import "./mix.css"

const Register = () => {

    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: "",
        sname:"",
        ffriend:"",
        fdish:"",
        fcolor:"",
        fsong:"",


    });


    const setVal = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const addUserdata = async (e) => {
        e.preventDefault();

        const { fname, email, password, cpassword,sname,ffriend,fdish,fcolor,fsong } = inpval;

        if (fname === "") {
            toast.warning("fname is required!", {
                position: "top-center"
            });
        } else if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else if (cpassword === "") {
            toast.error("cpassword is required!", {
                position: "top-center"
            });
        }
        else if (cpassword.length < 6) {
            toast.error("confirm password must be 6 char!", {
                position: "top-center"
            });
        } else if (password !== cpassword) {
            toast.error("pass and Cpass are not matching!", {
                position: "top-center"
            });
        }else if (sname === "") {
            toast.error("This is required!", {
                position: "top-center"
            });
        }else if (ffriend === "") {
            toast.error("This is required!", {
                position: "top-center"
            });
        }else if (fdish === "") {
            toast.error("This is required!", {
                position: "top-center"
            });
        }else if (fcolor === "") {
            toast.error("This is required!", {
                position: "top-center"
            });
        }else if (fsong === "") {
            toast.error("This is required!", {
                position: "top-center"
            });
        }
        else {
            // console.log("user registration succesfully done");


            const data = await fetch("http://localhost:5001/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, password, cpassword, sname, ffriend, fdish, fcolor, fsong
                })
            });

            const res = await data.json();
            console.log(res.status);

            if (res.status === 201) {
                toast.success("Registration Successfully done !", {
                    position: "top-center"
                });
                setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "", sname: "", ffriend: "", fdish: "", fcolor: "", fsong: "" });
            }
        }
    }

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Find Dubai</h1>
                        <p style={{ textAlign: "center" }}>User Registration</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="fname">Name</label>
                            <input type="text" onChange={setVal} value={inpval.fname} name="fname" id="fname" placeholder='Enter Your Name' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} value={inpval.password} onChange={setVal} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <div className="form_input">
                            <label htmlFor="password">Confirm Password</label>
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} value={inpval.cpassword} onChange={setVal} name="cpassword" id="cpassword" placeholder='Confirm password' />
                                <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>
                        <div>
                    <h3 style={{alignItems:"center"}}>Security Questions</h3>
                </div>
                <div className="form_input">
                    <div>
                        <label  htmlFor="password">What is your School name:</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Enter your Answer' className='form-control'
                        onChange={setVal} value={inpval.sname} name='sname'></input>
                    </div>
                </div>
                <div className="form_input">
                    <div>
                        <label>who was your first Friend:</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Enter your Answer' className='form-control'
                       onChange={setVal} value={inpval.ffriend} name='ffriend'></input>
                    </div>
                </div >
                <div className="form_input">
                    <div>
                        <label>What is your favourate Dish:</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Enter your Answer' className='form-control'
                       onChange={setVal} value={inpval.fdish} name='fdish'></input>
                    </div>
                </div>
                <div className="form_input">
                    <div>
                        <label>What is your favourate color:</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Enter your Answer' className='form-control'
                        onChange={setVal} value={inpval.fcolor} name='fcolor'></input>
                    </div>
                </div>
                <div className="form_input">
                     <div>
                        <label>What is your Favourate Song:</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Enter your Answer' className='form-control'
                        onChange={setVal} value={inpval.fsong} name='fsong'></input>
                    </div>
                </div>

                        <button className='btn' onClick={addUserdata}>Sign Up</button>
                        {/* <p>Already have an account? <NavLink to="/">Log In</NavLink></p> */}
                        <p>Already have an account? <Link to='/login'>Login In</Link></p>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Register
