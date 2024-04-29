import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


export default function UserRegistration() {
    const  [name , setName ] = useState("")
    const [number , setNumber ] = useState("")
    const [ email , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")
    const [ schoolName , setSchoolName ] = useState("")
    const [ firstFriend , setFristFriend ] = useState("")
    const [ favourateDish , setFavourateDish ] = useState("")
    const [ favourateColor , setFavourateColor ] = useState("")
    const [ favourateSong , setFavourateSong ] = useState("")

    const navigate = useNavigate();

    const Submit = (e) =>{
        console.log(name,email,number,password,schoolName,firstFriend,favourateDish,favourateColor,favourateSong)
        e.preventDefault();
        axios.post("http://localhost:5001/CreateUsersRegistration/",{
            name,
            email,
            number,
            password,
            schoolName,
            firstFriend,
            favourateDish,
            favourateColor,
            favourateSong
        })
        .then(result => {
            console.log(result)
             navigate('/')//navigate to homr page after adding the user data

        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex vh-100  justify-content-center align-item-center'>
      <form onSubmit={Submit} className='form  w-50  ' >
        <div>
            <div className=' '>
                <label>Name : </label>
            </div>
            <div>
                <input type='text' placeholder='Name' className='form-control' 
                onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className=''>
                <label>Phone number : </label>
            </div>
            <div>
                <input type='number' placeholder='Number' className='form-control'
                onChange={(e)=>setNumber(e.target.value)}></input>
            </div>
            <div className=''>
                <label>Email : </label>
            </div>
            <div>
                <input type='text' placeholder='Enter your Email' className='form-control'
                onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className=''>
                <label>Password : </label>
            </div>
            <div>
                <input type='password' placeholder='Password' className='form-control'
                onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <br></br>
            <div className='container'>
                <div>
                    <h3 style={{alignItems:"center"}}>Security Questions</h3>
                </div>
                <div>
                    <div>
                        <label>What is your School name:</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Enter your Answer' className='form-control'
                        onChange={(e)=>setSchoolName(e.target.value)}></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>who was your first Friend:</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Enter your Answer' className='form-control'
                        onChange={(e)=>setFristFriend(e.target.value)}></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>What is your favourate Dish:</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Enter your Answer' className='form-control'
                        onChange={(e)=>setFavourateDish(e.target.value)}></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>What is your favourate color:</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Enter your Answer' className='form-control'
                        onChange={(e)=>setFavourateColor(e.target.value)}></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>What is your Favourate Song:</label>
                    </div>
                    <div>
                        <input type='text' placeholder='Enter your Answer' className='form-control'
                        onChange={(e)=>setFavourateSong(e.target.value)}></input>
                    </div>
                </div>
            </div>
            <br></br>

            <div>
                <button className='btn btn-success'>Submit</button>
                <Link to='/' className='btn btn-success'>Go</Link>
            </div>
        </div>
      </form>
    </div>
  )
}
