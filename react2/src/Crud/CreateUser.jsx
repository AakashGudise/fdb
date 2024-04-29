import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";





export function CreateUser(){
    // const {id} = useParams
    const [ name , setName ] = useState("")
    const [ email , setEmail ] = useState("")
    const [ age , setAge ] = useState("")
    const [ password , setPassword ] = useState("")
    const navigate = useNavigate();


    // const navigte = ();
    // const navigate = useNavigate();
    // const Submit = (e) => {
    //     console.log(name,email,age)
    //     e.preventDefault();
    //     axios.post("http://localhost:5001/createUser", {name,email,age})
    //     .then(result => {
    //         console.log(result)
    //         navigate('/')//navigate to homr page after adding the user data
    //     })
    //     .catch(err => console.log(err))
    // }

    const Submit = (e) =>{
        console.log(name,email,age,password)
        e.preventDefault();
        axios.post("http://localhost:5001/CreateUsers",{name,email,age,password})
        .then(result => {
            console.log(result)
             navigate('/')//navigate to homr page after adding the user data

        })
        .catch(err => console.log(err))
    }


    return(
        <>
         <div>
            <form onSubmit={Submit} style={{width:"750px"}}>
                <div>
                    <label>Name</label>
                </div>
                <div>
                    <input type="text" placeholder="Enter Name"
                    onChange={(e)=>setName(e.target.value)} className="form-control"></input>
                </div>
                <div>
                    <label>Email</label>
                </div>
                <div>
                    <input type="text" placeholder="Enter Email"
                    onChange={(e)=>setEmail(e.target.value)} className="form-control"></input>
                </div>
                <div>
                    <label>Age</label>
                </div>
                <div>
                    <input type="number" placeholder="Age"
                    onChange={(e)=>setAge(e.target.value)} className="form-control"></input>
                </div>
                <div>
                    <label>Password</label>
                </div>
                <div>
                    <input type="password" placeholder="password"
                    onChange={(e)=>setPassword(e.target.value)} className="form-control"></input>
                </div>
                <div>
                    <button className="btn btn-success">Save</button>
                </div>
            </form>
         </div>
        </>
    )
}