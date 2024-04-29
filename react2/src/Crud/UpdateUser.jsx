// // import axios from "axios";
// // import { useEffect, useState  } from "react";
// // import { useParams, useNavigate } from "react-router-dom"
// import { useParams, useNavigate } from "react-router-dom"

// import { useEffect, useState } from "react"
// import axios from "axios"



// export function UpdateUser() {
//     const { id } = useParams()
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [age, setAge] = useState("");
//     const [ password , setPassword ] = useState("")
//     // const {id} = useParams()

//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get("http://localhost:5001/getUser/" + id)

//             .then(result => {
//                 console.log(result)
//                 setName(result.data.name)
//                 setEmail(result.data.email)
//                 setAge(result.data.age)
//                 setPassword(result.data.password)

//             })
//             .catch(err => console.log(err))
//     }, [])


//     const Update = (e) => {
//         console.log(name, email, age,password)
//         e.preventDefault();
//         axios.put("http://localhost:5001/UpdateUser/" + id)
//             .then(result => {
//                 console.log(result)
//                 navigate("/")
//             })
//     }

//     // const {id} = useParams();
//     // const [ name , setName ] = useState("");
//     // const [ email , setEmail ] = useState("");
//     // const [ age , setAge ] = useState("");

//     // const navigate = useNavigate();

//     // useEffect(()=>{
//     //     axios.get("http://localhost:5001/getUser/"+id)
//     //     .then(result => {
//     //         console.log(result)
//     //         setName(result.data.name)
//     //         setEmail(result.data.email)
//     //         setAge(result.data.age)

//     //     })
//     //     .catch(err => console.log(err))
//     //     // navigate('/')

//     // },[])
//     // const Update = (e) =>{
//     //     console.log(name,email,age)
//     //     e.preventDefault();
//     //     axios.put("http://localhost:5001/updateUser/"+id,{ name, email, age })

//     //     // axios.put("http://localhost:5001/updateUser"+id,{name,email,age})
//     //     .then(result =>{
//     //         console.log(result)
//     //         navigate('/')
//     //     })
//     //     .catch(err =>console.log(err))
//     // }

//     return (
//         <>
//             <div>
//                 <div className="d-flex justify-conternt-center align-item-center">
//                     <form onSubmit={Update} style={{width:"750px"}}>
//                         <div>
//                             <label>Name</label>
//                         </div>
//                         <div>
//                             <input type="text" placeholder="enter name" className="form-control"
//                                 onChange={(e) => setName(e.target.value)} value={name}></input>
//                         </div>
//                         <div>
//                             <label>Email</label>
//                         </div>
//                         <div>
//                             <input type="emiail" placeholder="enter email" className="form-control"
//                                 onChange={(e) => setEmail(e.target.value)} value={email}></input>
//                         </div>
//                         <div>
//                             <label>Age</label>
//                         </div>
//                         <div>
//                             <input type="number" placeholder="enter Age" className="form-control"
//                                 onChange={(e) => setAge(e.target.value)} value={age}></input>
//                         </div>
//                         <div>
//                             <label>password</label>
//                         </div>
//                         <div>
//                             <input type="password" placeholder="Password" className="form-control"
//                                 onChange={(e) => setPassword(e.target.value)} value={password}></input>
//                         </div>
//                         <button className="btn btn-success">Submit</button>
//                     </form>
//                 </div>

//             </div>
//         </>
//     )
// }