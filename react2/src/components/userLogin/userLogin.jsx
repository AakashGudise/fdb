
import React from 'react'
import { Link } from 'react-router-dom'

export default function UserLogin() {
  return (
    <div className='d-flex vh-100  justify-content-center align-item-center'>
        <form className='form  w-50 mt-5 ' >
            <div>
                <div>
                    <label>Name :</label>
                </div>
                <div>
                    <input type='text' placeholder='Enter your User ID' className='form-control'></input>
                </div>
                <div>
                    <label>Password :</label>
                </div>
                <div>
                    <input type='password' placeholder='Enter your User ID' className='form-control'></input>
                </div>
                <div>
                    <p>Recover your Password</p>
                </div>
                <br></br>
                <div>
                    <button className='btn btn-success m-3'>SignUP</button>
                    <Link to='/register' className='btn btn-primary'>Register</Link>
                    <Link to='/passwordRecovery' className='btn btn-primary'>Password Recovery</Link>


                </div>
            </div>
        </form>
    </div>
  )
}
